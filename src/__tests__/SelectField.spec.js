import React from 'react';
import { shallow } from 'enzyme';
import MuiSelectField from 'material-ui/SelectField';
import { mockFieldProps } from './utils';
import { SelectField } from '../SelectField';


describe('<SelectField />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockFieldProps({}, {}, {
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<SelectField {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
  });


  test('Should be handle change', () => {
    const onChange = jest.fn();
    const props = mockFieldProps({ onChange });
    const wrapper = shallow(<SelectField {...props} />);

    expect(onChange.mock.calls.length).toBe(0);
    wrapper.instance().handleChange(1, 2, 3);
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0]).toEqual([3]);
  });


  test('Should be render control', () => {
    const props = mockFieldProps();
    const wrapper = shallow(<SelectField {...props} />);

    const {
      input: {
        onChange,
        ...input
      },
      props: {
        shouldDisplayError,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <MuiSelectField
        {...input}
        {...rest}
        onChange={wrapper.instance().handleChange}
        errorText={null}
      />
    )).toBe(true);
  });


  test('Should be render children', () => {
    const element = <div className="select-field-child">child</div>;

    const props = mockFieldProps({}, {}, {
      children: element,
    });

    const wrapper = shallow(<SelectField {...props} />);

    expect(wrapper.contains(element)).toBe(true);
  });


  test('Should be render error text', () => {
    const props = mockFieldProps({}, {
      error: 'error!!',
    }, {
      shouldDisplayError: () => true,
    });

    const wrapper = shallow(<SelectField {...props} />);

    const {
      input: {
        onChange,
        ...input
      },
      props: {
        shouldDisplayError,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <MuiSelectField
        {...rest}
        {...input}
        onChange={wrapper.instance().handleChange}
        errorText={'error!!'}
      />
    )).toBe(true);
  });
});
