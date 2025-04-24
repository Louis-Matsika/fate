import Link from 'next/link'
import { CallToActionProps } from "./types";
import styles from './styles.module.scss';

const CallToAction = ({ text, link }: CallToActionProps) => {  
  return <Link href={link} className={styles.callToAction}><p>{text}</p></Link>;
};


export default CallToAction;
