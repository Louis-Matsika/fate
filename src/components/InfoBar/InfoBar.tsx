/** @jsxImportSource @emotion/react */
import styles from "./index.styles";

async function getData() {
  const res = await fetch('/api/featuredMusic', {
    cache: 'force-cache', // This caches the result
    next: {
      revalidate: 3600 // Revalidate every hour (optional)
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function InfoBar() {
  const music = await getData();

  return (
    <div css={styles.div}>
      <h1>SAI's fate</h1>
      <p>{music.title}</p>
      <p>{music.type}</p>
    </div>
  );
}

export default InfoBar;