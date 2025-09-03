import Header from "#/components/Header/Header";
import Footer from "#/components/Footer/Footer";
import Script from "next/script";

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
            <meta property="og:image" content="https://i1.sndcdn.com/avatars-w25QY244PCqsouCx-amX68g-t200x200.jpg" />
            <meta property="og:url" content="https://saisfate.com/" />
        </head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FHVV07Q6HK"></Script>
        <Script id="google-analytics">
            {
                `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-FHVV07Q6HK');
                `
            }
        </Script>
            <body className={styles.appBody}>
                <Header />
            {children}
                <Footer />
            </body>
        </html>
        </>
    );
}
 