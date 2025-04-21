import discography from "#/data/music/discography.json";
import Frame from "#/components/Frame";
import LearnMore from "#/components/LearnMore"


import "./global.css"
import styles from "./styles.module.scss";


const Home = () => {
    return (
        <>
            <main className={styles.main}>
            <Frame />
            <LearnMore id="SYSTEMSTHINKING"/>
            </main>
        </>
    );
};

export default Home;
