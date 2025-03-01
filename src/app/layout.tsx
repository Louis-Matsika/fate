"use client";
/** @jsxImportSource @emotion/react */

import styles from "./index.styles";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body css={styles.appBody}>{children}</body>
        </html>
    );
}
