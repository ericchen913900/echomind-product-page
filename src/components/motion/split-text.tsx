import { motion, useReducedMotion } from "framer-motion";
import { type ComponentPropsWithoutRef, type ElementType } from "react";

import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function tokenizeText(text: string) {
  if (/\s/.test(text)) return text.split(/\s+/);
  if (/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/.test(text)) {
    return Array.from(text);
  }
  return [text];
}

type SplitTextProps<T extends ElementType> = {
  as?: T;
  text: string;
  className?: string;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function SplitText<T extends ElementType = "h2">({
  as,
  text,
  className,
  delay = 0,
  ...props
}: SplitTextProps<T>) {
  const reduceMotion = useReducedMotion();
  const Component = (as ?? "h2") as ElementType;
  const tokens = tokenizeText(text);
  const usesSpaces = /\s/.test(text);

  return (
    <Component aria-label={text} className={cn(className)} {...props}>
      {tokens.map((token, index) => (
        <motion.span
          key={`${token}-${index}`}
          aria-hidden="true"
          className="inline-block"
          initial={reduceMotion ? false : { opacity: 0, y: "0.7em", filter: "blur(10px)" }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: "0em", filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.95 }}
          transition={{ duration: 0.82, delay: delay + index * 0.03, ease }}
        >
          {token}
          {usesSpaces && index < tokens.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </Component>
  );
}
