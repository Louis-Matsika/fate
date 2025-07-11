import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface TextBlockProps {
  className?: string;
  children?: ReactNode;
}

const TextBlock = ({ className, children }: TextBlockProps) => {
  return (
    <p className={`${styles.textBlock} ${className}`}>
      {children}
    </p>
  );
};

export default TextBlock;