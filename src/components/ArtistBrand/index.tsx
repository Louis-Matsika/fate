/** @jsxImportSource @emotion/react */

import { useScramble } from 'use-scramble';

import styles from ".";



const ArtistBrand = () => {
  const { ref } = useScramble({
    text: "SAI's fate.",
    speed: 0.2,
    tick: 1,
    step: 0.5,
    scramble: 2,
    overflow: false
  });

  return (
    <p ref={ref}><strong>SAI</strong>'s fate.</p>
  );
};

export default ArtistBrand;
