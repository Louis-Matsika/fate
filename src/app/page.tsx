"use client";

import Exhibit from "#/components/Exhibit";
import VideoEmbed from "../components/VideoEmbed/VideoEmbed";
import DividingLine from "#/themes/DividingLine/DividingLine";
import featured from "#/data/featured.json";
import Subheading from "#/components/Subheading";
import Frame from "#/components/Frame";
import CallToAction from "#/components/CallToAction";
import EmailCapture from "#/components/EmailCapture";
import "./global.css";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <main className={styles.main}>
        <Exhibit
          id={featured.id}
          description={false}
          fullDescription={false}
          cta={false}
        />
        <DividingLine />
        <EmailCapture />
      </main>
    </div>
  );
};

export default Home;
