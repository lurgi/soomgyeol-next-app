import { useEffect, useRef } from "react";

interface ScrollObserverProps {
  callback: () => void;
  options?: IntersectionObserverInit;
}

export default function ScrollObserver({ callback, options }: ScrollObserverProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer?.disconnect();
    };
  }, [callback, options]);

  return <div ref={targetRef} style={{ height: "10px", width: "10px" }}></div>;
}
