import Header from "#/components/Header/Header";
import Exhibit from "#/components/Exhibit";
import Footer from "#/components/Footer/Footer";


import "./global.css"
import styles from "./styles.module.scss";


const Home = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Exhibit id="SYSTEMSTHINKING"/>
            </main>
            <Footer />
        </>
    );
};

export default Home;
