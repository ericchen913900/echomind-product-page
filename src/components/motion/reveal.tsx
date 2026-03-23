import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  x?: number;
  y?: number;
  amount?: number;
};

export function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 24,
  amount = 0.2,
  transition,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x, y, filter: "blur(10px)" }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={transition ?? { duration: 0.78, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
