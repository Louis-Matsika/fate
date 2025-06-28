import styles from "./styles.module.scss";

import discography from "#/data/music/discography.json";

import { MusicButtonProps, DistroBarProps } from "./types";

const MusicButton = ({ link, platform }: MusicButtonProps) => {
  return (
    <div className={styles.MusicButton}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={`${styles[`${platform}Icon`]}`}
          src={`external-brands/${platform}-icon.svg`}
          alt={`${platform} logo`}
        />
        <div className={`${styles.flare} ${styles[platform]}`}></div>
      </a>
    </div>
  );
};

const DistroBar = ({ id }: DistroBarProps) => {
  const single = discography.find((index) => index.id === id);

  return (
    <div className={styles.distroBar}>
      {single?.links?.map((link, key) => (
        <MusicButton key={key} link={link.link} platform={link.platform} />
      ))}
    </div>
  );
};

export default DistroBar;
