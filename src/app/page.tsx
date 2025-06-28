"use client";

import Exhibit from "#/components/Exhibit";
import VideoEmbed from "../components/VideoEmbed/VideoEmbed";
import DividingLine from "#/themes/DividingLine/DividingLine";
import featured from "#/data/featured.json";
import Subheading from "#/components/Subheading";
import Frame from "#/components/Frame";
import CallToAction from "#/components/CallToAction";

import "./global.css";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <main className={styles.main}>
        <Exhibit id={featured.id} fullDescription={false} />
        <DividingLine />
        <div className={styles.VideoEmbedWrapper}>
          <VideoEmbed
            VideoId="06rkItPZ3ks"
            title="falconDoors."
            ContentType="musicVideo"
          />
        </div>
        <DividingLine />
        <Subheading text="Want to know who I am?" />
        <Frame
          src={"sai"}
          alt={`3d portrait of SAI`}
          className={styles.frame}
        />
        <div className={styles.ctaWrapper}>
          <CallToAction
            CTA="visit about page"
            link="/about"
            className={styles.callToAction}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
