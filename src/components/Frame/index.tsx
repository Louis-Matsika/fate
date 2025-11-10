import Image from "next/image";

import { FrameProps } from "./types";
import styles from "./styles.module.scss";

const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  sai: { width: 1920, height: 1920 },
  falcondoors: { width: 2000, height: 2000 },
  systemsthinking: { width: 7680, height: 7680 },
};

const Frame = ({ src, alt, className }: FrameProps) => {
  const wrapperClassName = className
    ? `${styles.frameContainer} ${className}`
    : styles.frameContainer;

  const { width, height } =
    IMAGE_DIMENSIONS[src] ?? IMAGE_DIMENSIONS.systemsthinking;

  return (
    <div className={wrapperClassName}>
      <Image
        className={styles.art}
        src={`/${src}.png`}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 480px) 90vw, (max-width: 1024px) 70vw, 45vw"
        priority={src === "systemsthinking"}
      />
    </div>
  );
};

export default Frame;
