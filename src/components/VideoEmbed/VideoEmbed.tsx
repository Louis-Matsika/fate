'use client';

import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import styles from "./styles.module.scss";

import { VideoEmbedProps } from "./types";

const VideoEmbed = ({ VideoId, title, ContentType, className }: VideoEmbedProps) => {
  const wrapperClassName = className
    ? `${styles.VideoEmbed} ${className}`
    : styles.VideoEmbed;

  return (
    <div className={wrapperClassName}>
      <LiteYouTubeEmbed id={VideoId} title={title} />
      {ContentType === "musicVideo" && (
        <div className={styles.videoPlaque}>
          <div className={styles.watchDetailsContainer}>
            <h3>{title}</h3>
            <p className={styles.watchDetails}>
              {`new music video out now!`}
            </p>
          </div>
          <Image
            className={styles.watchIcon}
            src="/icons/film.svg"
            alt="watch icon"
            width={48}
            height={48}
            priority={false}
          />
        </div>
      )}
    </div>
  );
};

export default VideoEmbed;
