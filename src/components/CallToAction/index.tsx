import Link from 'next/link'
import { CallToActionProps } from "./types";
import styles from './styles.module.scss';

const CallToAction = ({ text, link, className }: CallToActionProps) => {
  return (
    <Link href={link} className={`${styles.callToAction} ${className}`}>
      <strong>{text}</strong>
    </Link>
  );
};


export default CallToAction;
