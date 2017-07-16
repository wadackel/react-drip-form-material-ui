import React from 'react';
import { shallow } from 'enzyme';
import ErrorLabel from '../ErrorLabel';


const mockContext = (context = {}, muiTheme = {}) => ({
  ...context,
  muiTheme: {
    prepareStyles: styles => styles,
    textField: {
      errorColor: 'red',
    },
    ...muiTheme,
  },
});

const mockShallow = (element, muiTheme = {}) => (
  shallow(element, { context: mockContext({}, muiTheme) })
);


describe('Internal#<ErrorLabel />', () => {
  test('Should be render children', () => {
    const element = <div id="foo">foo bar baz</div>;
    const wrapper = mockShallow(
      <ErrorLabel>
        {element}
      </ErrorLabel>
    );

    expect(wrapper.contains(element)).toBe(true);
  });


  test('Should be styled component', () => {
    const wrapper = shallow(<ErrorLabel>foo</ErrorLabel>, {
      context: mockContext(),
    });

    expect(wrapper.prop('style').fontSize).toBe(12);
    expect(wrapper.prop('style').color).toBe(mockContext().muiTheme.textField.errorColor);
  });


  test('Should be override error styles', () => {
    const wrapper = shallow(
      <ErrorLabel style={{ color: 'green', fontSize: 14 }}>
        error
      </ErrorLabel>
      , {
        context: mockContext(),
      }
    );

    expect(wrapper.prop('style').fontSize).toBe(14);
    expect(wrapper.prop('style').color).toBe('green');
  });
});
