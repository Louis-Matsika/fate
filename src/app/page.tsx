"use client";

import Exhibit from "#/components/Exhibit";
import VideoEmbed from "../components/VideoEmbed/VideoEmbed";
import DividingLine from "#/themes/DividingLine/DividingLine";
import AboutBar from "#/components/AboutBar";

import "./global.css";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <Exhibit id="SYSTEMSTHINKING" fullDescription={false} />
        <DividingLine />
        <div className={styles.VideoEmbedWrapper}>
          <VideoEmbed
            VideoId="06rkItPZ3ks"
            title="falconDoors."
            ContentType="musicVideo"
          />
        </div>
        <AboutBar />
      </main>
    </>
  );
};

export default Home;
