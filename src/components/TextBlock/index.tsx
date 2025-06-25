import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface TextBlockProps {
  children?: ReactNode;
}

const TextBlock = ({ children }: TextBlockProps) => {
  return (
    <p className={styles.textBlock}>
      {children}
    </p>
  );
};

export default TextBlock;