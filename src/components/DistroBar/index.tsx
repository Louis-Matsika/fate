import styles from "./styles.module.scss";

const MusicButton = () => {
  return (
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      button
    </a>
  );
};

const DistroBar = () => {
  return (
    <div className={styles.distroBar}>
      <MusicButton />
    </div>
  );
};

export default DistroBar;
