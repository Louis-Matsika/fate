"use client";
import { useParams } from "next/navigation";
import AboutBar from "#/components/AboutBar";
import Headline from "#/components/Headline";
import Frame from "#/components/Frame";
import Subheading from "#/components/Subheading";

import styles from "./styles.module.scss";

import sai from "#/data/sai.json";
import TextBlock from "#/components/TextBlock";

const AboutPage = () => {
  return (
    <>
      <Frame src={"sai"} alt={`3d portrait of SAI`} className={styles.frame} />
      <Headline text={"Hi, I'm SAI"} className={styles.headLine}/>
      <TextBlock>{sai.about}</TextBlock>
      <AboutBar />
    </>
  );
};

export default AboutPage;
