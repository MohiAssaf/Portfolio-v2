import { useMemo } from "react";
import ShootingStar from "@/components/Background/ShootingStar";

const StarField = ({ numberOfStars = 110, mobileVisibleStars = 70 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: numberOfStars }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 3.2;
      const twinkleDelay = Math.random() * 5;
      const opacity = 0.3 + Math.random() * 0.7;
      const mobileVisibility = i >= mobileVisibleStars ? "hidden sm:block" : "";

      return (
        <div
          key={i}
          className={`absolute rounded-full bg-green animate-twinkle-drift motion-reduce:animate-none ${mobileVisibility}`}
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
  }, [numberOfStars, mobileVisibleStars]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars}
      <ShootingStar />
    </div>
  );
};

export default StarField;
