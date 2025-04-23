import discography from "#/data/music/discography.json";
import Frame from "#/components/Frame";
import Exhibit from "#/components/Exhibit"


import "./global.css"
import styles from "./styles.module.scss";


const Home = () => {
    return (
        <>
            <main className={styles.main}>
            <Exhibit id="SYSTEMSTHINKING" fullDescription={false}/>
            </main>
        </>
    );
};

export default Home;
