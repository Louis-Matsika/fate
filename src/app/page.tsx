"use client";
/** @jsxImportSource @emotion/react */

import Header from "#/components/Header/Header";
import Exhibit from "#/components/Exhibit";
import Footer from "#/components/Footer/Footer";


import styles from "./index.styles";
import "./global.css";

const Home = () => {
    return (
        <>
            <Header />
            <main css={styles.main}>
                <Exhibit />
            </main>
            <Footer />
        </>
    );
};

export default Home;
