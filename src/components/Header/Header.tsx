import styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.omoBrand} src="/OMOlogo.png" alt="OMOcloud logo" />
        </header>
    );
};

export default Header;
