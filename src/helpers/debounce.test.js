import debounce from './debounce';

jest.useFakeTimers();

describe('debounce function', () => {
  it('should debounce the function', () => {
    // arrange
    const testFn = jest.fn();
    const debouncedFn = debounce(testFn, 1000);

    // act
    debouncedFn();
    debouncedFn();

    // assert
    expect(testFn).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(testFn).toBeCalledTimes(1);
  });

  it('should debounce with multiple calls', () => {
    // arrange
    const testFn = jest.fn();
    const debouncedFn = debounce(testFn, 1000);

    // act
    debouncedFn();
    debouncedFn();

     // assert
    expect(testFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(testFn).not.toHaveBeenCalled();

    debouncedFn();
    expect(testFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(testFn).toHaveBeenCalledTimes(1);
  });
});

