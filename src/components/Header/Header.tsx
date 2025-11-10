import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Navigate to homepage">
        <Image
          className={styles.omoBrand}
          src="/OMOlogo.png"
          alt="OMOcloud logo"
          width={941}
          height={1489}
          priority
          sizes="120px"
        />
      </Link>
    </header>
  );
};

export default Header;
