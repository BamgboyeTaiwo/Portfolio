import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

const hiddenVariants: Record<Direction, Record<string, number>> = {
  up: { opacity: 0, y: 40 },
  down: { opacity: 0, y: -40 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  scale: { opacity: 0, scale: 0.9 },
  fade: { opacity: 0 },
};

const visibleVariant = { opacity: 1, x: 0, y: 0, scale: 1 };

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
}

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  margin = "-80px",
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin });

  return (
    <motion.div
      ref={ref}
      initial={hiddenVariants[direction]}
      animate={inView ? visibleVariant : hiddenVariants[direction]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered container for card grids
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  margin = "-80px",
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  margin?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger item
export const StaggerItem = ({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) => (
  <motion.div
    variants={{
      hidden: hiddenVariants[direction],
      visible: { ...visibleVariant, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;
