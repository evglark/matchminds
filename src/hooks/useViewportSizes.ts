import { useEffect, useState } from 'react';

const useViewportWidth = (): number => {
  const [width, setWidth] = useState(455);

  const viewportChange = (e: UIEvent): void => {
    const target = e.target as Window;
    setWidth(target.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', viewportChange);
    return () => window.removeEventListener('resize', viewportChange);
  }, []);

  return width;
};

const useViewportHeight = (): number => {
  const [height, setHeight] = useState(0);

  const viewportChange = (e: UIEvent): void => {
    const target = e.target as Window;
    setHeight(target.innerHeight);
  };

  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener('resize', viewportChange);
    return () => window.removeEventListener('resize', viewportChange);
  }, []);

  return height;
};

export { useViewportHeight, useViewportWidth };
