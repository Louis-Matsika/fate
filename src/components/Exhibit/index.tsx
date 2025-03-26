import discography from "#/data/music/discography.json";

import Frame from "#/components/Frame";
import ArtistBrand from "#/components/ArtistBrand";

import styles from "./styles.module.scss";
import { ExhibitProps } from "./types";

const Exhibit = ({ id }: ExhibitProps) => {
  const featured = discography.find((index) => index.id === id);

  console.log(featured)
  return (
    <div className={styles.exhibit}>
      <Frame />
      <ArtistBrand />
      <div className={styles.infoPlaque}>
        <h2 className={styles.title}>
          {featured?.title}
        </h2> 
        {/* {featured?.credit && (
          <p className={styles.credits}>
            {featured?.credit}
          </p>
        )} */}
        <p className={styles.infoDetail}>
          <img className={styles.infoIcon} src="/info.png" alt="information icon" />
          {featured?.description}
        </p>
      </div>
    </div>
  );
};

export default Exhibit;
