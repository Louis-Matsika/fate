import discography from "#/data/music/discography.json";
import DistroBar from "#/components/DistroBar";
import CallToAction from "#/components/CallToAction";

import Frame from "#/components/Frame";
import Headline from "#/components/Headline";
import Subheading from "../Subheading";

import styles from "./styles.module.scss";
import { ExhibitProps } from "./types";

const Exhibit = ({ id, fullDescription, description, cta }: ExhibitProps) => {
  const featured = discography.find((index) => index.id === id);

  const altImageText = `Cover art for ${featured!.title}`;


  return (
    <div className={styles.exhibit}>
      <Headline text={"SAI's fate."} />
      <Frame src={featured!.id} alt={altImageText} />
      <div className={styles.infoPlaque}>
        <Subheading text={featured!.title} />
        <DistroBar id={id} />
        {fullDescription && description && (
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
        {!fullDescription && description && (<div className={styles.learnMore}>
            <p className={styles.infoDetail}>
              <img
                className={styles.infoIcon}
                src="/info.png"
                alt="information icon"
              />
              {featured?.short}{"..."}
            </p>
            <div className={styles.ctaWrapper}>
              {cta && <CallToAction CTA="Learn more" link={`${id}`}/>}
          </div>
    </div>)}
      </div>
    </div>
  );
};

export default Exhibit;