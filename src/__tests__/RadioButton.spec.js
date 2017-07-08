import React from 'react';
import { shallow } from 'enzyme';
import MuiRadioButton from 'material-ui/RadioButton';
import { mockFieldProps } from './utils';
import { RadioButton } from '../RadioButton';
import ErrorLabel from '../internal/ErrorLabel';


describe('<RadioButton />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockFieldProps({}, {}, {
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<RadioButton {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
  });


  test('Should be render control', () => {
    const onChange = () => {};
    const labelText = 'RadioButton label';
    const props = mockFieldProps({
      onChange,
    }, {}, {
      labelText,
    });
    const wrapper = shallow(<RadioButton {...props} />);
    const {
      input: {
        onChange: _onChange,
        ...input
      },
      props: {
        shouldDisplayError,
        errorLabelStyle,
        labelText: _labelText,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <span>
        <MuiRadioButton
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

    const wrapper = shallow(<RadioButton {...props} />);

    const {
      input: {
        onChange: _onChange,
        ...input
      },
      props: {
        shouldDisplayError,
        errorLabelStyle,
        labelText,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <span>
        <MuiRadioButton
          {...rest}
          {...input}
          onCheck={onChange}
          label="foo"
        />
        <ErrorLabel>bar</ErrorLabel>
      </span>
    )).toBe(true);
  });
});
