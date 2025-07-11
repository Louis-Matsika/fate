"use client";
import { useParams } from "next/navigation";
import DistroBar from "#/components/DistroBar";
import Headline from "#/components/Headline";
import Frame from "#/components/Frame";
import Subheading from "#/components/Subheading";
import DividingLine from "#/themes/DividingLine/DividingLine";

import styles from "./styles.module.scss";

import sai from "#/data/sai/about.json";
import TextBlock from "#/components/TextBlock";

const AboutPage = () => {
  return (
    <div>
      <Headline text={"Hi, I'm SAI"} className={styles.headLine} />
      <Frame src={"sai"} alt={`3d portrait of SAI`} className={styles.frame} />
      <TextBlock>{sai.about}</TextBlock>
      <DividingLine />
      <Subheading text={"Social links"} />
      <DistroBar id={"sai"} />
    </div>
  );
};

export default AboutPage;
