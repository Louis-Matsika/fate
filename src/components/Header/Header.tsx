import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
            <img className={styles.omoBrand} src="/OMOlogo.png" alt="OMOcloud logo" />
            </Link>
        </header>
    );
};

export default Header;
