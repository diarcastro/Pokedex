import { useEffect, useState } from 'react';

interface IMediaQuery {
  name: string
  mq: string
  setStateFunction(newState:boolean): void;
  currentState: boolean;
}

const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaQueries:IMediaQuery[] = [
    {
      name: 'mobile', mq: '(max-width: 767px)', currentState: isMobile, setStateFunction: setIsMobile,
    },
    {
      name: 'tablet', mq: '(min-width: 768px) and (max-width: 1023px)', currentState: isTablet, setStateFunction: setIsTablet,
    },
    {
      name: 'desktop', mq: '(min-width: 1024px)', currentState: isDesktop, setStateFunction: setIsDesktop,
    },
  ];

  useEffect(() => {
    const mqls:MediaQueryList[] = [];
    const onChange = (event: any) => {
      const { media, matches } = event?.currentTarget as MediaQueryList || event;
      const currentMediaQuery = mediaQueries.find((item) => item.mq === media);
      if (currentMediaQuery) {
        const { currentState, setStateFunction } = currentMediaQuery;
        if (typeof setStateFunction === 'function') {
          if (matches !== currentState) {
            setStateFunction(matches);
          }
        }
      }
    };

    mediaQueries.forEach((item) => {
      const { mq } = item;
      if (mq) {
        const mql = window.matchMedia(mq);
        mql.addEventListener('change', onChange);
        mqls.push(mql);
        onChange(mql);
      }
    });

    return () => {
      mqls.forEach((mql) => mql.removeEventListener('change', onChange));
    };
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useBreakpoint;
