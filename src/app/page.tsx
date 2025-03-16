import Header from "#/components/Header/Header";
import Exhibit from "#/components/Exhibit";
import Footer from "#/components/Footer/Footer";
import DistroBar from "#/components/DistroBar";


import styles from "./styles.module.scss";
import "#/themes/global.scss";

const Home = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Exhibit />
                <DistroBar id="falcons"/>
            </main>
            <Footer />
        </>
    );
};

export default Home;
