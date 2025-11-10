import dynamic from "next/dynamic";

import Exhibit from "#/components/Exhibit";
import DividingLine from "#/themes/DividingLine/DividingLine";
import featured from "#/data/featured.json";
import Subheading from "#/components/Subheading";
import Frame from "#/components/Frame";
import CallToAction from "#/components/CallToAction";

import styles from "./styles.module.scss";

const VideoEmbed = dynamic(
  () => import("#/components/VideoEmbed/VideoEmbed"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.videoPlaceholder} aria-label="Loading video…" />
    ),
  },
);

const Home = () => {
  return (
    <div className={styles.homepage}>
      <main className={styles.main}>
        <Exhibit id={featured.id} fullDescription={false} />
        <DividingLine />
        <div className={styles.VideoEmbedWrapper}>
          <VideoEmbed
            VideoId="iEZd_AXVA9Y"
            title="'HELLO WORLD!'"
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
            CTA="Visit about page"
            link="/about"
            className={styles.callToAction}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
