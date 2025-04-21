import discography from "#/data/music/discography.json";
import styles from "./styles.module.scss";

import { LearnMoreProps } from "./types";

const LearnMore = ({ id }: LearnMoreProps) => {
  const featured = discography.find((index) => index.id === id);

  return (
    <div className={styles.learnMore}>
      <p className={styles.infoDetail}>
        <img
          className={styles.infoIcon}
          src="/info.png"
          alt="information icon"
        />
        {featured?.short}...
      </p>
      
    </div>
  );
};

export default LearnMore;
