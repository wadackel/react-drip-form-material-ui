import React from 'react';
import { shallow } from 'enzyme';
import MuiTextField from 'material-ui/TextField';
import { mockFieldProps } from './utils';
import { TextField } from '../TextField';


describe('<TextField />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockFieldProps({}, {}, {
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<TextField {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
  });


  test('Should be render control', () => {
    const props = mockFieldProps();
    const wrapper = shallow(<TextField {...props} />);
    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <MuiTextField
        {...rest}
        {...input}
        errorText={null}
      />
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const props = mockFieldProps(
      {},
      { error: 'foo' },
      {
        shouldDisplayError: () => true,
      }
    );

    const wrapper = shallow(<TextField {...props} />);

    const {
      input,
      props: {
        shouldDisplayError,
        shouldDisplaySpinner,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <MuiTextField
        {...rest}
        {...input}
        errorText="foo"
      />
    )).toBe(true);
  });
});
