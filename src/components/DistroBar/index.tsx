import React from "react";

import discography from "#/data/music/discography.json";
import about from "#/data/sai/about.json";

import styles from "./styles.module.scss";

import { MusicButtonProps, DistroBarProps } from "./types";

const LinkButton = ({ link, platform }: MusicButtonProps) => {
  return (
    <div className={styles.MusicButton}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className={`${styles[`${platform}Icon`]}`}
          src={`external-brands/${platform}-icon.svg`}
          alt={`${platform} logo`}
        />
        <div className={`${styles.flare} ${styles[platform]}`}></div>
      </a>
    </div>
  );
};

const DistroBar = ({ id }: DistroBarProps) => {
  let links = [];

  // If the id is "sai", we use the links from the about data
  // Otherwise, find the music entry in the discography
  if (id === "sai") {
    links = about?.links || [];
  } else {
    const music = discography.find((index) => index.id === id);
    links = music?.links || [];
  }
  return (
    links && (
      <div className={styles.distroBar}>
        {links.map((link, key) => (
          <LinkButton key={key} link={link.link} platform={link.platform} />
        ))}
      </div>
    )
  );
};

export default DistroBar;
