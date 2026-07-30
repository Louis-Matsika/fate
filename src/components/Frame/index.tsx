import { FrameProps } from "./types";
import styles from "./styles.module.scss";

const Frame = ({ src, alt, className }: FrameProps) => {
  return (
    <div
      className={
        className
          ? `${styles.frameContainer} ${className}`
          : styles.frameContainer
      }
    >
      <picture>
        <source srcSet={`/${src}.webp`} type="image/webp" />
        <img
          className={styles.art}
          src={`/${src}.png`}
          height={"auto"}
          alt={alt}
        />
      </picture>
    </div>
  );
};

export default Frame;
