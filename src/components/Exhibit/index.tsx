import Image from "next/image";

import CallToAction from "#/components/CallToAction";
import DistroBar from "#/components/DistroBar";
import Frame from "#/components/Frame";
import Headline from "#/components/Headline";
import discography from "#/data/music/discography.json";
import Subheading from "../Subheading";

import styles from "./styles.module.scss";
import { ExhibitProps } from "./types";

const Exhibit = ({ id, fullDescription }: ExhibitProps) => {
  const featured = discography.find((entry) => entry.id === id);

  if (!featured) {
    return null;
  }

  const altImageText = `Cover art for ${featured.title}`;

  const InfoIcon = (
    <Image
      className={styles.infoIcon}
      src="/info.png"
      alt="information icon"
      width={32}
      height={32}
      loading="lazy"
    />
  );

  return (
    <div className={styles.exhibit}>
      <Headline text={"SAI's fate."} />
      <Frame src={featured.id} alt={altImageText} />
      <div className={styles.infoPlaque}>
        <Subheading text={featured.title} />
        <DistroBar id={id} />
        {fullDescription ? (
          <p className={styles.infoDetail}>
            {InfoIcon}
            {featured.description}
          </p>
        ) : (
          <div className={styles.learnMore}>
            <p className={styles.infoDetail}>
              {InfoIcon}
              {featured.short}
              {"..."}
            </p>
            <div className={styles.ctaWrapper}>
              <CallToAction CTA="Learn more" link={`${id}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exhibit;
