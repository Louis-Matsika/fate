import styles from "./styles.module.scss";

import SAI from "#/data/sai.json";

import { AboutButtonProps } from "./types";

const AboutButton = ({ link, platform }: AboutButtonProps) => {
  return (
    <div className={styles.AboutButton}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={`external-brands/${platform}-icon.svg`}
          alt={`${platform} logo`}
        />
        <div className={`${styles.flare} ${styles[platform]}`}></div>
      </a>
    </div>
  );
};

const AboutBar = () => {
  return (
    <>
    <h2 className={styles.title}>Social links</h2>
    <div className={styles.AboutBar}>  
      {SAI?.links?.map((link, key) => (
        <AboutButton key={key} link={link.link} platform={link.platform} />
      ))}
    </div>
    </>
  );
};

export default AboutBar;
