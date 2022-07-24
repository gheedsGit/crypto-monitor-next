import CoinCard from "./CoinCard";
import styles from "../styles/CoinList.module.scss";

const CoinList = ({ coinData }) => {
  return (
    <div className={styles.container}>
      {coinData.map((coin) => (
        <CoinCard key={coin.id} {...coin} />
      ))}
    </div>
  );
};

export default CoinList;
