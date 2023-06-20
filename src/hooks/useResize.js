import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', () => {
      setTimeout(handleResize, 1000);
    });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width;
};
