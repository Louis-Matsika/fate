import Image from "next/image";

import about from "#/data/sai/about.json";
import discography from "#/data/music/discography.json";

import styles from "./styles.module.scss";

import { DistroBarProps, MusicButtonProps } from "./types";

const ICON_DIMENSIONS = {
  width: 64,
  height: 64,
};

const LinkButton = ({ link, platform }: MusicButtonProps) => {
  const flareClassName = styles[platform] ?? styles.flare;

  return (
    <div className={styles.MusicButton}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          className={styles.icon}
          src={`/external-brands/${platform}-icon.svg`}
          alt={`${platform} logo`}
          {...ICON_DIMENSIONS}
          loading="lazy"
        />
        <div className={`${styles.flare} ${flareClassName}`} />
      </a>
    </div>
  );
};

const DistroBar = ({ id }: DistroBarProps) => {
  const links =
    id === "sai"
      ? about.links ?? []
      : discography.find((item) => item.id === id)?.links ?? [];

  if (!links.length) {
    return null;
  }

  return (
    <div className={styles.distroBar}>
      {links.map((link) => (
        <LinkButton key={link.platform} link={link.link} platform={link.platform} />
      ))}
    </div>
  );
};

export default DistroBar;
