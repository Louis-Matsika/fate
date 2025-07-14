import Link from "next/link";
import { CallToActionProps } from "./types";
import styles from "./styles.module.scss";
import TextBlock from "../TextBlock";

const CallToAction = ({ CTA, link, text, className }: CallToActionProps) => {
  return (
    <Link href={link} className={`${styles.callToAction} ${className}`}>
      <strong>{CTA}</strong>
      {text && <TextBlock>{text}</TextBlock>}
    </Link>
  );
};

export default CallToAction;
