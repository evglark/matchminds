import { useEffect, useRef, useState } from 'react';

import { SCROLLING } from '@/constants/scrolling';
const isClient = (): boolean => typeof window === 'object';

const STATES = {
  TOP: SCROLLING.TOP,
  SCROLLING_DOWN: SCROLLING.SCROLLING_DOWN,
  SCROLLING_UP: SCROLLING.SCROLLING_UP,
  currentState: SCROLLING.TOP,
  lastScroll: 0,
  getCurrentState(currentScroll: number, maxHeight: number) {
    if (currentScroll < maxHeight) this.currentState = this.TOP;
    else {
      if (this.lastScroll < currentScroll) this.currentState = this.SCROLLING_DOWN;
      else this.currentState = this.SCROLLING_UP;
    }

    this.lastScroll = currentScroll;
    return this.currentState;
  },
};

export const useScrollViewer = (maxHeight: number): string => {
  const scrollView = useRef<any>(null);
  const [currentState, setState] = useState(STATES.TOP);

  useEffect(() => {
    if (isClient()) {
      scrollView.current = window;
    }
  }, [scrollView.current]);

  const checkScroll = (): void => {
    const newState = getCurrentState();

    setState((currentState) => {
      if (currentState !== newState) {
        return newState;
      }

      return currentState;
    });
  };

  const getCurrentState = (): string => {
    const currentScroll = scrollView.current.scrollY;
    return STATES.getCurrentState(currentScroll, maxHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [maxHeight]);

  return currentState;
};
