import { useEffect, useState } from 'react';

// Defers heavy media requests until the browser is idle (or after a short delay fallback).
type IdleCallbackHandle = number;

type IdleCallbackDeadline = {
  didTimeout: boolean;
  timeRemaining: () => number;
};

declare global {
  interface Window {
    requestIdleCallback?: (
      callback: (deadline: IdleCallbackDeadline) => void,
      options?: { timeout: number }
    ) => IdleCallbackHandle;
    cancelIdleCallback?: (handle: IdleCallbackHandle) => void;
  }
}

export const useDeferredMedia = (delay = 400): boolean => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;

    let idleHandle: IdleCallbackHandle | null = null;
    let timeoutHandle: number | null = null;

    const markReady = () => setReady(true);

    if (typeof window !== 'undefined') {
      if (typeof window.requestIdleCallback === 'function') {
        idleHandle = window.requestIdleCallback(markReady, { timeout: delay + 200 });
      } else {
        timeoutHandle = window.setTimeout(markReady, delay);
      }
    }

    return () => {
      if (idleHandle !== null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) {
        window.clearTimeout(timeoutHandle);
      }
    };
  }, [ready, delay]);

  return ready;
};

