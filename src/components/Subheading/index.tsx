"use client";
import { useScramble } from "use-scramble";

import { SubheadingProps } from "./types";

import styles from "./styles.module.scss";

const Subheading = ({ text, className }: SubheadingProps) => {
  const { ref, replay } = useScramble({
    text: `${text}`,
    speed: 0.07,
    step: 10,
  });

  const composedClassName = className
    ? `${styles.subheading} ${className}`
    : styles.subheading;

  return (
    <h2
      className={composedClassName}
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
    >
      ⠕
    </h2>
  );
};

export default Subheading;
