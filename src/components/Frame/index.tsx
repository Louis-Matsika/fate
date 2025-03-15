import Image from "next/image";
import styles from "./styles.module.scss";

const Frame = () => {
    return (
        <div className={styles.frameContainer}>
            <img className={styles.art} src="/falconsart.png" height={"auto"} alt="Picture of the author" />
        </div>
    );
};

export default Frame;
