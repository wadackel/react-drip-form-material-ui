import React from 'react';
import { shallow } from 'enzyme';
import { mockGroupProps } from './utils';
import { FieldGroup } from '../FieldGroup';
import ErrorLabel from '../internal/ErrorLabel';


describe('<FieldGroup />', () => {
  test('Should be pass function props', () => {
    const shouldDisplayError = jest.fn();
    const props = mockGroupProps({}, {
      shouldDisplayError,
    });

    expect(shouldDisplayError.mock.calls.length).toBe(0);

    shallow(<FieldGroup {...props}>group</FieldGroup>);

    expect(shouldDisplayError.mock.calls.length).toBe(1);
    expect(shouldDisplayError.mock.calls[0]).toEqual([{ ...props, children: 'group' }]);
  });


  test('Should be pass props and render children', () => {
    const props = mockGroupProps();
    const wrapper = shallow(
      <FieldGroup
        {...props}
        id="foo"
        data-foo="bar"
        role="group"
      >
        props
      </FieldGroup>
    );

    const {
      meta,
      shouldDisplayError,
      ...rest
    } = props;

    expect(wrapper.equals(
      <div
        {...rest}
        id="foo"
        data-foo="bar"
        role="group"
      >
        props
      </div>
    )).toBe(true);
  });


  test('Should be render error text', () => {
    const props = mockGroupProps({
      error: 'error label',
    }, {
      shouldDisplayError: () => true,
    });

    const wrapper = shallow(
      <FieldGroup {...props}>
        props
      </FieldGroup>
    );

    const {
      meta,
      shouldDisplayError,
      ...rest
    } = props;

    expect(wrapper.equals(
      <div {...rest}>
        props
        <ErrorLabel>error label</ErrorLabel>
      </div>
    )).toBe(true);
  });
});
