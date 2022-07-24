import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { fetchCoinData, selectCoinData } from "../redux/coinDataSlice";
import { storeWrapper } from "../redux/store";
import CoinList from "../components/CoinList";
import styles from "../styles/Home.module.scss";
import { useEffect } from "react";

export const getServerSideProps = storeWrapper.getServerSideProps(
  (store) => async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
    );
    const dataArr = await response.json();
    await store.dispatch(fetchCoinData(dataArr));
  }
);

export const Home = () => {
  const coinData = useSelector(selectCoinData);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.push("/", undefined, { scroll: false });
    }, 30000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Coin Monitor</title>
        <link rel="icon" href="/ic_launcher.png" />
      </Head>
      <CoinList coinData={coinData} />
    </div>
  );
};

export default Home;
