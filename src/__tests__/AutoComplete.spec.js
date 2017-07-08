import React from 'react';
import { shallow } from 'enzyme';
import MuiAutoComplete from 'material-ui/AutoComplete';
import { mockFieldProps } from './utils';
import { AutoComplete } from '../AutoComplete';


describe('<AutoComplete />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockFieldProps({}, {}, {
      shouldDisplayError,
      dataSource: [],
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<AutoComplete {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
  });


  test('Should be handle new request', () => {
    const onChange = jest.fn();
    const onNewRequest = jest.fn();
    const props = mockFieldProps({
      onChange,
    }, {}, {
      dataSource: [],
      onNewRequest,
    });

    const wrapper = shallow(<AutoComplete {...props} />);

    expect(onChange.mock.calls.length).toBe(0);
    expect(onNewRequest.mock.calls.length).toBe(0);

    wrapper.instance().handleNewRequest('val', 1);
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0]).toEqual(['val']);
    expect(onNewRequest.mock.calls.length).toBe(1);
    expect(onNewRequest.mock.calls[0]).toEqual(['val', 1]);

    wrapper.setProps({
      ...props,
      props: {
        ...props.props,
        dataSourceConfig: {
          value: 'value',
        },
      },
    });
    wrapper.instance().handleNewRequest({ value: 'foo' }, 2);
    expect(onChange.mock.calls.length).toBe(2);
    expect(onChange.mock.calls[1]).toEqual(['foo']);
  });


  test('Should be handle update', () => {
    const onChange = jest.fn();
    const onUpdateInput = jest.fn();
    const props = mockFieldProps({
      onChange,
    }, {}, {
      dataSource: [],
      onUpdateInput,
    });

    const wrapper = shallow(<AutoComplete {...props} />);

    expect(onChange.mock.calls.length).toBe(0);
    expect(onUpdateInput.mock.calls.length).toBe(0);
    wrapper.instance().handleUpdate(1, 2, 3);
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0]).toEqual([1]);
    expect(onUpdateInput.mock.calls.length).toBe(1);
    expect(onUpdateInput.mock.calls[0]).toEqual([1, 2, 3]);
  });


  test('Should be render control', () => {
    const props = mockFieldProps({}, {}, {
      dataSource: [],
    });

    const wrapper = shallow(<AutoComplete {...props} />);
    const field = wrapper.instance();

    const {
      input,
      props: {
        shouldDisplayError,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <MuiAutoComplete
        {...rest}
        {...input}
        onClose={field.handleClose}
        onNewRequest={field.handleNewRequest}
        onUpdateInput={field.handleUpdate}
        errorText={null}
      />
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const props = mockFieldProps({}, {
      error: 'foobar',
    }, {
      shouldDisplayError: () => true,
      dataSource: [],
    });

    const wrapper = shallow(<AutoComplete {...props} />);

    expect(wrapper.find(MuiAutoComplete).prop('errorText')).toBe('foobar');
  });
});
