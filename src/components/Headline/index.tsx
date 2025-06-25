"use client";
import { useScramble } from "use-scramble";

import { HeadlineProps } from "./types";

import styles from "./styles.module.scss";

const Headline = ({ text}: HeadlineProps) => {
  const { ref, replay } = useScramble({
    text: `${text}`,
    speed: 0.1,
    step: 1,
  });

  return (
    <h1
      className={styles.artistBrand}
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
    >
      ⠕
    </h1>
  );
};

export default Headline;
