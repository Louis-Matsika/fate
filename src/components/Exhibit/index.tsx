/** @jsxImportSource @emotion/react */

import Frame from "#/components/Frame";
import ArtistBrand from "#/components/ArtistBrand";

import styles from "./index.styles";

const Exhibit = () => {
  return (
    <div css={styles.exhibit}>
      <Frame css={styles.frame} />
      <ArtistBrand css={styles.artistBrand} />
      <div css={styles.infoPlaque}>
        <h2 css={styles.title}>falcons.</h2>
        <p css={styles.credits}>Prod. SAI</p>
        <p css={styles.infoDetail}>
          <img
            css={styles.infoIcon}
            src={"/info.png"}
            alt={"information icon"}
          />
          'falcons.' is my latest single in a while and is the lead song to my first ever album dropping on the 27th of March
        </p>
      </div>
    </div>
  );
};

export default Exhibit;
