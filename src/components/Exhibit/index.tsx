import discography from "#/data/music/discography.json";
import DistroBar from "#/components/DistroBar";
import CallToAction from "#/components/CallToAction";

import Frame from "#/components/Frame";
import Headline from "#/components/Headline";
import Subheading from "../Subheading";

import styles from "./styles.module.scss";
import { ExhibitProps } from "./types";

const Exhibit = ({ id, fullDescription }: ExhibitProps) => {
  const featured = discography.find((index) => index.id === id);

  console.log(featured);

  const altImageText = `Cover art for ${featured!.title}`;


  return (
    <div className={styles.exhibit}>
      <Headline text={"SAI's fate."} />
      <Frame src={featured!.id} alt={altImageText} />
      <div className={styles.infoPlaque}>
        <Subheading text={featured!.title} />
        <DistroBar id={id} />
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
      <CallToAction CTA="learn more" link={`${id}`}/>
          </div>
    </div>)}
      </div>
    </div>
  );
};

export default Exhibit;