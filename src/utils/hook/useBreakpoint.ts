import { useState, useEffect } from 'react';
// import throttle from 'lodash.throttle';

type ScreenDevice = 'xs' | 'sm' | 'md' | 'lg';

const getDeviceConfig = (width: number): ScreenDevice => {
  if (width < 320) {
    return 'xs';
  } else if (width >= 320 && width < 720) {
    return 'sm';
  } else if (width >= 720 && width < 1024) {
    return 'md';
  } else {
    return 'lg';
  }
};

const useBreakpoint = (): ScreenDevice => {
  const [brkPnt, setBrkPnt] = useState(window.innerWidth);

  const calcInnerWidth = () => setBrkPnt(window.innerWidth);

  // const calcInnerWidth = throttle(() => setBrkPnt(window.innerWidth), 200);

  useEffect(() => {
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return getDeviceConfig(brkPnt);
};

export default useBreakpoint;
