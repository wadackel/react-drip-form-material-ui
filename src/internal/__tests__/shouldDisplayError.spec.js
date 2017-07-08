import shouldDisplayError from '../shouldDisplayError';


describe('Internal#shouldDisplayError()', () => {
  test('Should be return true', () => {
    expect(shouldDisplayError({
      meta: {
        error: 'error',
        dirty: true,
        touched: true,
      },
    })).toBe(true);
  });


  test('Should be return false', () => {
    expect(shouldDisplayError({
      meta: {
        error: '',
        dirty: true,
        touched: true,
      },
    })).toBe(false);

    expect(shouldDisplayError({
      meta: {
        error: null,
        dirty: true,
        touched: true,
      },
    })).toBe(false);

    expect(shouldDisplayError({
      meta: {
        error: 'foo',
        dirty: false,
        touched: true,
      },
    })).toBe(false);

    expect(shouldDisplayError({
      meta: {
        error: 'foo',
        dirty: true,
        touched: false,
      },
    })).toBe(false);

    expect(shouldDisplayError({
      meta: {
        error: 'foo',
        dirty: false,
        touched: false,
      },
    })).toBe(false);

    expect(shouldDisplayError({
      meta: {
        error: '',
        dirty: false,
        touched: false,
      },
    })).toBe(false);
  });
});
