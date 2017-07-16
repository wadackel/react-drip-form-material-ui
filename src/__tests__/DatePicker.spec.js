import React from 'react';
import { shallow } from 'enzyme';
import MuiDatePicker from 'material-ui/DatePicker';
import { mockFieldProps } from './utils';
import { DatePicker } from '../DatePicker';
import ErrorLabel from '../internal/ErrorLabel';


describe('<DatePicker />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockFieldProps({
      value: null,
    }, {}, {
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<DatePicker {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
  });


  test('Should be handle change', () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const props = mockFieldProps({ value: null, onChange, onBlur });
    const wrapper = shallow(<DatePicker {...props} />);

    expect(onChange.mock.calls.length).toBe(0);
    expect(onBlur.mock.calls.length).toBe(0);
    wrapper.instance().handleChange(1, 2);
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0]).toEqual([2]);
    expect(onBlur.mock.calls.length).toBe(1);
  });


  test('Should be render control', () => {
    const onBlur = () => {};
    const props = mockFieldProps({ value: null, onBlur });
    const wrapper = shallow(<DatePicker {...props} />);

    const {
      input: {
        onChange,
        onBlur: _onBlur,
        ...input
      },
      meta,
      shouldDisplayError,
      errorLabelStyle,
      ...rest
    } = props;

    expect(wrapper.equals(
      <span>
        <MuiDatePicker
          {...rest}
          {...input}
          onChange={wrapper.instance().handleChange}
          onDismiss={onBlur}
        />
      </span>
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const props = mockFieldProps({
      value: null,
    }, {
      error: 'error!!',
    }, {
      shouldDisplayError: () => true,
    });

    const wrapper = shallow(<DatePicker {...props} />);

    expect(wrapper.contains(
      <ErrorLabel>error!!</ErrorLabel>
    )).toBe(true);
  });


  test('Should be render change error style', () => {
    const errorLabelStyle = {
      background: 'hotpink',
      fontSize: '100rem',
    };

    const props = mockFieldProps({
      value: null,
    }, {
      error: 'error!!',
    }, {
      shouldDisplayError: () => true,
      errorLabelStyle,
    });

    const wrapper = shallow(<DatePicker {...props} />);

    expect(wrapper.contains(
      <ErrorLabel style={errorLabelStyle}>error!!</ErrorLabel>
    )).toBe(true);
  });
});
