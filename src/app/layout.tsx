import styles from "./styles.module.scss";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={styles.appBody}>{children}</body>
        </html>
    );
}
