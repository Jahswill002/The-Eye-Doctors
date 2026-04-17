import { useState, useEffect, useRef } from 'react';

export function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      
      let start = null;
      const easeOut = t => 1 - Math.pow(1 - t, 3);
      
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(easeOut(progress) * target));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
      observer.disconnect();
    }, { threshold: 0.3 });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}
