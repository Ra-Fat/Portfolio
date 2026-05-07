import { useEffect } from 'react';

export const useLockScroll = (active: boolean) => {
  useEffect(() => {
    document.documentElement.style.overflow = active ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [active]);
};