import { useState, useEffect, useRef } from 'react';
import debounce from '../helpers/debounce';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  const ref = useRef(null);

  const handleScroll = debounce(() => {
    if (ref.current && window.innerHeight + window.scrollY >= ref.current.offsetHeight - 10 && !isFetching) {
      setIsFetching(true);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
    setIsFetching(false);
  }, [isFetching]);

  return {ref, isFetching, setIsFetching};
};

export default useInfiniteScroll;