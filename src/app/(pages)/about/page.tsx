"use client";
import { useParams } from "next/navigation";
import AboutBar from "#/components/AboutBar";
import Headline from "#/components/Headline";

// import "../global.css"
import styles from "./styles.module.scss";

import sai from "#/data/sai.json";
import TextBlock from "#/components/TextBlock";

const AboutPage = () => {
  const params = useParams();
  return (
    <>
      <Headline text={"Hi, I'm SAI"} className={styles.headLine}/>
      <TextBlock>{sai.about}</TextBlock>
      <AboutBar />
    </>
  );
};

export default AboutPage;
