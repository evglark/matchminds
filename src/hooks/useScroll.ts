import { useEffect, useState } from 'react';

import { useScrollViewer } from './useScrollViewer';

export const useScroll = (maxHeight: number): string => {
  const [currentMax, setMax] = useState(maxHeight);

  const viewerState = useScrollViewer(currentMax);

  const handleResize = (): void => {
    const width = (maxHeight / 414) * 100;
    const _with = (width * window.innerWidth) / 100;
    setMax(_with);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  });

  return viewerState;
};
