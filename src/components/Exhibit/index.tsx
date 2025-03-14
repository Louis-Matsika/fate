import featuredMusic from "#/data/featuredMusic.json";

import Frame from "#/components/Frame";
import ArtistBrand from "#/components/ArtistBrand";

import styles from "./styles.module.scss";

const Exhibit = () => {
  return (
    <div className={styles.exhibit}>
      <Frame className={styles.frame} />
      <ArtistBrand className={styles.frame}/>
      <div className={styles.infoPlaque}>
        <h2 className={styles.title}>
          {featuredMusic.title}
        </h2>
        {featuredMusic.credit && (
          <p className={styles.credits}>
            {featuredMusic.credit}
          </p>
        )}
        <p className={styles.infoDetail}>
          <img className={styles.infoIcon} src="/info.png" alt="information icon" />
          {featuredMusic.description}
        </p>
      </div>
    </div>
  );
};

export default Exhibit;
