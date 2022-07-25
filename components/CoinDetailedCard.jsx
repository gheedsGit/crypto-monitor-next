import React from "react";
import Image from "next/image";

import styles from "../styles/CoinDetailedCard.module.scss";

const CoinDetailedCard = ({ name, market_data, symbol, image }) => {
  const priceValue = market_data.current_price.usd.toLocaleString("en-US");
  const priceChange = market_data.price_change_percentage_24h.toFixed(3);

  console.log(priceChange);
  return (
    <div className={styles.container}>
      <div className={styles.nameSection}>
        <div className={styles.nameHead}>
          <span>
            <Image src={image.large} alt={name} height={60} width={60} />
          </span>
          <div className={styles.nameText}>
            <h2>{name}</h2>
            <small className={styles.nameSymbol}>{symbol}</small>
          </div>
        </div>
      </div>
      <div className={styles.priceSection}>
        <div className={styles.priceHead}>
          <span>{name} Price</span>
          <small>({symbol})</small>
        </div>
        <div className={styles.priceTitle}>
          <div className={styles.priceValue}>${priceValue}</div>
          <span
            className={
              priceChange > 0 ? styles.positiveChange : styles.negativeChange
            }
          >
            {priceChange}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinDetailedCard;
