import Link from "next/link";
import styles from "./styles.module.scss";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { VideoEmbedProps } from "./types";

const VideoEmbed = ({ VideoId, title, ContentType }: VideoEmbedProps) => {
  return (
    <div className={styles.VideoEmbed}>
      <LiteYouTubeEmbed id={VideoId} title={title} />
      {ContentType === "musicVideo" && (
        <div className={styles.videoPlaque}>
          <div className={styles.watchDetailsContainer}>
            <h3>{title}</h3>
            <p className={styles.watchDetails}>
              {`new music video out now!`}
            </p>
          </div>
          <img
            className={styles.watchIcon}
            src="/icons/film.svg"
            alt="watch icon"
          />
        </div>
      )}
    </div>
  );
};

export default VideoEmbed;
