import { motion as Motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const ScrollReveal = ({ children, once = false, offset = "0px 0px 10% 0px" }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        rootMargin: offset, // Покажи малко по-рано
        threshold: 0.3,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once, offset]);

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
};
