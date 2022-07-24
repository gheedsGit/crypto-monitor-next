import Image from "next/image";

import Logo from "../public/logo.png";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <Image src={Logo} alt="logo" />
    </header>
  );
};

export default Header;
