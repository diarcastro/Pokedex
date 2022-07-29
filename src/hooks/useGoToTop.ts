import { useCallback } from 'react';
import APP_CONFIG from 'config';

const useGoToTop = () => useCallback((smooth: boolean = false) => {
  const { scrollTop } = document.documentElement;
  if (window && scrollTop && scrollTop > APP_CONFIG.HEADER_HEIGHT) {
    window.scrollTo({
      top: 0,
      behavior: smooth ? 'smooth' : undefined,
    });
  }
}, []);

export default useGoToTop;
