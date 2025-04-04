import React, { useState, useRef, useEffect } from "react";

interface PullToRefreshProps {
  children: React.ReactNode;
  onRefresh?: () => Promise<void> | void;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({ children, onRefresh }) => {
  const [pulling, setPulling] = useState(false);
  const [distance, setDistance] = useState(0);
  const startY = useRef<number | null>(null);
  const threshold = 60;

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startY.current = e.touches[0].clientY;
        setPulling(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!pulling || startY.current === null) return;
      const delta = e.touches[0].clientY - startY.current;
      if (delta > 0) {
        setDistance(Math.min(delta, 100));
      }
    };

    const handleTouchEnd = async () => {
      if (pulling && distance >= threshold && onRefresh) {
        await onRefresh();
      }
      setDistance(0);
      setPulling(false);
      startY.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pulling, distance, onRefresh]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="text-center text-sm text-gray-500 transition-all duration-200"
        style={{ height: pulling ? `${distance}px` : "0px", opacity: pulling ? 1 : 0 }}
      >
        {distance >= threshold ? "🔄 새로고침 중..." : "⬇️ 아래로 당겨 새로고침"}
      </div>
      <div
        className="transition-transform duration-200"
        style={{ transform: `translateY(${pulling ? distance : 0}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default PullToRefresh;
