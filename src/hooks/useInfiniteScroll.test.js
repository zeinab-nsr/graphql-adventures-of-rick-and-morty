import { renderHook, act } from '@testing-library/react-hooks';
import useInfiniteScroll from './useInfiniteScroll';

jest.useFakeTimers();

describe('useInfiniteScroll', () => {
  it('should return ref object', () => {
    const { result } = renderHook(() => useInfiniteScroll(jest.fn));

    expect(result.current).toHaveProperty('ref');
  });

  it('should call the callback when the user scrolls', async() => {
    const mockCallback = jest.fn();
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const scrollEvent = new Event('scroll');
    const { result } = renderHook( () => useInfiniteScroll(mockCallback));
    const {ref} = result.current;
    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    ref.current = { offsetHeight: 100 };
    window.innerHeight = 20;
    window.scrollY = 80;

    act(() => {
      window.dispatchEvent(scrollEvent);
      jest.advanceTimersByTime(100);
    });

    expect(mockCallback).toHaveBeenCalled();
    addEventListenerSpy.mockRestore();
  });
});
