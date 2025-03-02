"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import styles from "./index.styles";

const Frame = () => {
    return (
        <div css={styles.frameContainer}>
            <img css={styles.art} src="/test-img.jpg" width={500} height={"auto"} alt="Picture of the author" />
        </div>
    );
};

export default Frame;
