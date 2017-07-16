import React from 'react';
import { shallow } from 'enzyme';
import MuiCheckbox from 'material-ui/Checkbox';
import { mockFieldProps } from './utils';
import { Checkbox } from '../Checkbox';
import ErrorLabel from '../internal/ErrorLabel';


describe('<Checkbox />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockFieldProps({}, {}, {
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<Checkbox {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
  });


  test('Should be render control', () => {
    const onChange = () => {};
    const labelText = 'Checkbox label';
    const props = mockFieldProps({
      onChange,
    }, {}, {
      labelText,
    });
    const wrapper = shallow(<Checkbox {...props} />);
    const {
      input: {
        onChange: _onChange,
        ...input
      },
      meta,
      shouldDisplayError,
      errorLabelStyle,
      labelText: _labelText,
      ...rest
    } = props;

    expect(wrapper.equals(
      <span>
        <MuiCheckbox
          {...rest}
          {...input}
          onCheck={onChange}
          label={labelText}
        />
      </span>
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const onChange = () => {};
    const props = mockFieldProps(
      { onChange },
      { error: 'bar' },
      {
        shouldDisplayError: () => true,
        labelText: 'foo',
      }
    );

    const wrapper = shallow(<Checkbox {...props} />);

    const {
      input: {
        onChange: _onChange,
        ...input
      },
      meta,
      shouldDisplayError,
      errorLabelStyle,
      labelText,
      ...rest
    } = props;

    expect(wrapper.equals(
      <span>
        <MuiCheckbox
          {...rest}
          {...input}
          onCheck={onChange}
          label="foo"
        />
        <ErrorLabel>bar</ErrorLabel>
      </span>
    )).toBe(true);
  });


  test('Should be change error label style', () => {
    const errorLabelStyle = {
      color: 'red',
      border: '10px dotted pink',
    };

    const props = mockFieldProps(
      {},
      { error: 'error' },
      {
        shouldDisplayError: () => true,
        errorLabelStyle,
      }
    );

    const wrapper = shallow(<Checkbox {...props} />);

    expect(wrapper.containsMatchingElement(
      <ErrorLabel style={errorLabelStyle}>error</ErrorLabel>
    )).toBe(true);
  });
});
