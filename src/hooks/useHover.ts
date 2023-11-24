import { useCallback, useEffect, useState } from 'react';

export const useHover = (ref: any, onMouseEnterCallback: () => void) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (onMouseEnterCallback) {
      onMouseEnterCallback();
    }
  }, [onMouseEnterCallback]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [ref, handleMouseEnter, handleMouseLeave]);

  return {
    isHovered,
    onMouseLeave: handleMouseLeave,
  };
}
