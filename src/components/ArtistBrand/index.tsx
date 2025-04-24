"use client";

import { useScramble } from "use-scramble";
import styles from "./styles.module.scss";

const ArtistBrand = () => {
  const { ref, replay } = useScramble({
    text: "SAI's fate.",
    speed: 0.1,
    step: 1,
  });

  return (
    <h1
      className={styles.artistBrand}
      ref={ref} // Attach the ref to the element
      onMouseOver={replay} // Trigger replay on hover
      onFocus={replay} // Trigger replay on focus
    >
      SAI's fate.
    </h1>
  );
};

export default ArtistBrand;
