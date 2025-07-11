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
      <img
        className={styles.art}
        src={`/${src}.png`}
        height={"auto"}
        alt={alt}
      />
    </div>
  );
};

export default Frame;
