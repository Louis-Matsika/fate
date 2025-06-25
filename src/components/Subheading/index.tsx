"use client";
import { useScramble } from "use-scramble";

import { SubheadingProps } from "./types";

import styles from "./styles.module.scss";

const Subheading = ({ text }: SubheadingProps) => {
  const { ref, replay } = useScramble({
    text: `${text}`,
    speed: 0.07,
    step: 10,
  });

  return (
    <h2
      className={styles.Subheading}
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
    >
      ⠕
    </h2>
  );
};

export default Subheading;
