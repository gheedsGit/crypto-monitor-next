import Head from "next/head";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CoinMonitor</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
