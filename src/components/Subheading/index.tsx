import { SubheadingProps } from "./types";

import styles from "./styles.module.scss";

const Subheading = ({ text, className }: SubheadingProps) => {
  return <h2 className={`${className} ${styles.subheading}`}>{text}</h2>;
};

export default Subheading;
