import { useEffect, useState } from 'react';

export const useMount = (): boolean => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, []);

  return isMount;
};
