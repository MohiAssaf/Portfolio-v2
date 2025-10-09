import { useMemo } from "react";

const StarField = ({ numberOfStars = 150 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: numberOfStars }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 0.5;
      const twinkleDelay = Math.random() * 5;
      const opacity = 0.3 + Math.random() * 0.7;

      return (
        <div
          key={i}
          className="absolute rounded-full bg-green animate-twinkle-drift"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            animationDelay: `${twinkleDelay}s`,
          }}
        />
      );
    });
  }, [numberOfStars]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars}
    </div>
  );
};

export default StarField;
