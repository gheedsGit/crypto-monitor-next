import { useRouter } from "next/router";
import React from "react";
import CoinDetailedCard from "../../components/CoinDetailedCard";

const CoinDetailed = ({ coinData }) => {
  const router = useRouter();

  React.useEffect(() => {
    const interval = setInterval(() => {
      router.push(router.asPath, undefined, { scroll: false });
    }, 5000);

    return () => clearInterval(interval);
  }, [router]);

  return <CoinDetailedCard {...coinData} />;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false"
  );
  const data = await res.json();

  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const coinData = await response.json();

  return {
    props: {
      coinData,
    },
  };
};

export default CoinDetailed;
