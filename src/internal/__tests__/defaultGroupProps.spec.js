import shouldDisplayError from '../shouldDisplayError';
import defaultGroupProps from '../defaultGroupProps';


describe('Internal#defaultGroupProps', () => {
  test('Should be return default group props', () => {
    expect(defaultGroupProps).toEqual({
      shouldDisplayError,
    });
  });
});
