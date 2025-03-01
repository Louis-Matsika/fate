"use client";
/** @jsxImportSource @emotion/react */

import styles from "./index.styles";

const Header = () => {
    return (
        <header css={styles.header}>
            <img css={styles.omoBrand} src="/OMOlogo.png" alt="OMOcloud logo" />
        </header>
    );
};

export default Header;
