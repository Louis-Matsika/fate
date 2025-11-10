"use client";
import { useScramble } from "use-scramble";

import { HeadlineProps } from "./types";

import styles from "./styles.module.scss";

const Headline = ({ text, className }: HeadlineProps) => {
  const composedClassName = className
    ? `${styles.headline} ${className}`
    : styles.headline;

  const { ref, replay } = useScramble({
    text: String(text),
    speed: 0.1,
    step: 1,
  });

  return (
    <h1
      className={composedClassName}
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
    >
      ⠕
    </h1>
  );
};

export default Headline;
