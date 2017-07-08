import React from 'react';
import { shallow } from 'enzyme';
import MuiSlider from 'material-ui/Slider';
import { mockFieldProps } from './utils';
import { Slider } from '../Slider';
import ErrorLabel from '../internal/ErrorLabel';


describe('<Slider />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockFieldProps({
      value: 0,
    }, {}, {
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<Slider {...props} />);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([props]);
  });


  test('Should be handle change', () => {
    const onChange = jest.fn();
    const props = mockFieldProps({ value: 1, onChange });
    const wrapper = shallow(<Slider {...props} />);

    expect(onChange.mock.calls.length).toBe(0);
    wrapper.instance().handleChange(1, 2);
    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0]).toEqual([2]);
  });


  test('Should be render control', () => {
    const props = mockFieldProps({ value: 0 });
    const wrapper = shallow(<Slider {...props} />);

    const {
      input: {
        onChange,
        ...input
      },
      props: {
        shouldDisplayError,
        errorLabelStyle,
        ...rest
      },
    } = props;

    expect(wrapper.equals(
      <span>
        <MuiSlider
          {...rest}
          {...input}
          onChange={wrapper.instance().handleChange}
        />
      </span>
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const props = mockFieldProps({
      value: 0,
    }, {
      error: 'error!!',
    }, {
      shouldDisplayError: () => true,
    });

    const wrapper = shallow(<Slider {...props} />);

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
      value: 0,
    }, {
      error: 'error!!',
    }, {
      shouldDisplayError: () => true,
      errorLabelStyle,
    });

    const wrapper = shallow(<Slider {...props} />);

    expect(wrapper.contains(
      <ErrorLabel style={errorLabelStyle}>error!!</ErrorLabel>
    )).toBe(true);
  });
});
