import Header from "#/components/Header/Header";
import Footer from "#/components/Footer/Footer";

import "./global.css"
import styles from "./styles.module.scss";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <html lang="en">
            <body className={styles.appBody}>
                <Header />
            {children}
                <Footer />
            </body>
        </html>
        </>
    );
}
