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
        <head>
            <title>SAI's fate. — Music, and Creative Projects</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Discover the music and creative works of SAI. Listen to tracks, explore albums, and connect with SAI’s artistic journey." />
            <link rel="canonical" href="https://saisfate.com/" />
            <meta name="robots" content="index, follow" />
            {/* Open Graph tags */}
            <meta property="og:title" content="SAI's fate — Music, and Creative Projects" />
            <meta property="og:description" content="Discover the music and creative works of SAI. Listen to tracks, explore albums, and connect with SAI’s artistic journey." />
            <meta property="og:image" content="" />
            <meta property="og:url" content="https://saisfate.com/" />
        </head>
            <body className={styles.appBody}>
                <Header />
            {children}
                <Footer />
            </body>
        </html>
        </>
    );
}
