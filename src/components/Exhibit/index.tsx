import discography from "#/data/music/discography.json";
import DistroBar from "#/components/DistroBar";
import CallToAction from "#/components/CallToAction";

import Frame from "#/components/Frame";
import ArtistBrand from "#/components/ArtistBrand";

import styles from "./styles.module.scss";
import { ExhibitProps } from "./types";

const Exhibit = ({ id, fullDescription }: ExhibitProps) => {
  const featured = discography.find((index) => index.id === id);

  return (
    <div className={styles.exhibit}>
      <Frame />
      <ArtistBrand />
      <div className={styles.infoPlaque}>
        <h2 className={styles.title}>{featured?.title}</h2>
        <DistroBar id="SYSTEMSTHINKING" />
        {fullDescription && (
          <>
            <p className={styles.infoDetail}>
              <img
                className={styles.infoIcon}
                src="/info.png"
                alt="information icon"
              />
              {featured?.description}
            </p>
          </>
        )}
        {!fullDescription && (<div className={styles.learnMore}>
      <p className={styles.infoDetail}>
        <img
          className={styles.infoIcon}
          src="/info.png"
          alt="information icon"
        />
        {featured?.short}{"..."}
      </p>
      <div className={styles.ctaWrapper}>
      <CallToAction text="learn more" link={"/SystemsThinking"}/>
      </div>
    </div>)}
      </div>
    </div>
  );
};

export default Exhibit;