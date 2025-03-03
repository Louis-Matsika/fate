/** @jsxImportSource @emotion/react */

import featuredMusic from "#/data/featuredMusic.json";

import Frame from "#/components/Frame";
import ArtistBrand from "#/components/ArtistBrand";

import styles from "./index.styles";

const Exhibit = () => {
  return (
    <div css={styles.exhibit}>
      <Frame css={styles.frame} />
      <ArtistBrand css={styles.artistBrand} />
      <div css={styles.infoPlaque}>
        <h2 css={styles.title}>
          {featuredMusic.title}
        </h2>
        {featuredMusic.credit && (
          <p css={styles.credits}>
            {featuredMusic.credit}
          </p>
        )}
        <p css={styles.infoDetail}>
          <img css={styles.infoIcon} src="/info.png" alt="information icon" />
          {featuredMusic.description}
        </p>
      </div>
    </div>
  );
};

export default Exhibit;
