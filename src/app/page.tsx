"use client";
/** @jsxImportSource @emotion/react */

import Header from "#/components/Header/Header";
import Frame from "#/components/Frame/Frame";
import Footer from "#/components/Footer/Footer";
import InfoBar from "#/components/InfoBar/InfoBar";

import styles from "./index.styles";

const Home = () => {
    return (
        <>
            <Header />
            <main css={styles.main}>
                <Frame />
                <InfoBar />
            </main>
            <Footer />
        </>
    );
};

export default Home;
