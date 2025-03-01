"use client";
/** @jsxImportSource @emotion/react */

import Header from "#/components/Header/Header";
import Frame from "#/components/Frame/Frame";
import Footer from "#/components/Footer/Footer";

import { ThemeProvider } from "@emotion/react";
import withThemeProvider from "#/themes/withThemeProvider";
import styles from "./index.styles";

const Home = () => {
  return (
    <ThemeProvider theme={withThemeProvider}>
      <div css={styles.div}>
        <Header />
        <Frame />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
