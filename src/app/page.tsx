import Header from "#/components/Header/Header";
import Exhibit from "#/components/Exhibit";
import Footer from "#/components/Footer/Footer";
import MusicButton from "#/components/MusicButton/Header";


import styles from "./styles.module.scss";
import "#/themes/global.scss";

const Home = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Exhibit />
                <MusicButton/>
            </main>
            <Footer />
        </>
    );
};

export default Home;
