'use client'
/** @jsxImportSource @emotion/react */

import styles from "./index.styles";

import Header from "#/components/Header/Header";
import Frame from "#/components/Frame/Frame";
import Footer from "#/components/Footer/Footer";

const Home=()=> {
  return (
    <div css={styles.div}>
      <Header />
      <Frame />
      <Footer />
    </div>
  );
}

export default Home;
