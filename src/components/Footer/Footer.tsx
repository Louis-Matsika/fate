import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a className={styles.link} href="https://github.com/Louis-Matsika/fate" target="_blank" rel="noopener noreferrer">
                SAI's fate. repo
            </a>
        </footer>
    );
};

export default Footer;
