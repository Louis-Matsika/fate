"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import styles from "./index.styles";

const InfoBar = () => {
  const [music, setMusic] = useState<{ 
    title?: string; 
    type?: string }>({});

  useEffect(() => {
    const fetchMusic = async () => {
      const res = await fetch("/api/featuredMusic");
      const data = await res.json();
      setMusic(data);
    };

    fetchMusic();
  }, []);

  return (
    <div css={styles.div}>
      <h1>SAI's fate</h1>
      <p>{music.title}</p>
      <p>{music.type}</p>
    </div>
  );
};

export default InfoBar;
