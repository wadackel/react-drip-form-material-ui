import React from 'react';
import { shallow } from 'enzyme';
import MuiToggle from 'material-ui/Toggle';
import { mockFieldProps } from './utils';
import { Toggle } from '../Toggle';
import ErrorLabel from '../internal/ErrorLabel';


describe('<Toggle />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockFieldProps({}, {}, {
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<Toggle {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
  });


  test('Should be render control', () => {
    const onChange = () => {};
    const labelText = 'Toggle label';
    const props = mockFieldProps({
      onChange,
      checked: true,
    }, {}, {
      labelText,
    });
    const wrapper = shallow(<Toggle {...props} />);
    const {
      input: {
        onChange: _onChange,
        checked,
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
        <MuiToggle
          {...rest}
          {...input}
          defaultChecked
          onToggle={onChange}
          label={labelText}
        />
      </span>
    )).toBe(true);
  });


  test('Should be render unchecked control', () => {
    const onChange = () => {};
    const labelText = 'Toggle label';
    const props = mockFieldProps({
      onChange,
      checked: false,
    }, {}, {
      labelText,
    });
    const wrapper = shallow(<Toggle {...props} />);
    const {
      input: {
        onChange: _onChange,
        checked,
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
        <MuiToggle
          {...rest}
          {...input}
          defaultChecked={false}
          onToggle={onChange}
          label={labelText}
        />
      </span>
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const onChange = () => {};
    const props = mockFieldProps(
      {
        onChange,
        checked: true,
      },
      { error: 'bar' },
      {
        shouldDisplayError: () => true,
        labelText: 'foo',
      }
    );

    const wrapper = shallow(<Toggle {...props} />);

    const {
      input: {
        onChange: _onChange,
        checked,
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
        <MuiToggle
          {...rest}
          {...input}
          defaultChecked
          onToggle={onChange}
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

    const wrapper = shallow(<Toggle {...props} />);

    expect(wrapper.containsMatchingElement(
      <ErrorLabel style={errorLabelStyle}>error</ErrorLabel>
    )).toBe(true);
  });
});
