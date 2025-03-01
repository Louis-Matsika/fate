'use client'
/** @jsxImportSource @emotion/react */

import { ThemeProvider } from '@emotion/react'

import Header from "#/components/Header/Header";
import Frame from "#/components/Frame/Frame";
import Footer from "#/components/Footer/Footer";

import styles from "./index.styles";

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

const Home=()=> {
  return (
    <ThemeProvider theme={theme}>
    <div css={styles.div}>
      <Header />
      <Frame />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default Home;
