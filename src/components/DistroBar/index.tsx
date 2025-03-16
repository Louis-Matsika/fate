import styles from "./styles.module.scss";

import singles from "#/data/discography/singles.json";

import { MusicButtonProps, DistroBarProps } from "./types";

const MusicButton = ({ link }: MusicButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {link}
    </a>
  );
};

const DistroBar = ({ id }: DistroBarProps) => {
  const single = singles.find((index) => index.id === id)
  console.log(single);

  return (
    <div className={styles.distroBar}>
      <MusicButton  link={single.links[0]}/>
    </div>
  );
};

export default DistroBar;
