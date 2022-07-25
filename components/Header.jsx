import Image from "next/image";
import Link from "next/link";

import Logo from "../public/logo.png";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <Image src={Logo} alt="logo" />
        </a>
      </Link>
    </header>
  );
};

export default Header;
