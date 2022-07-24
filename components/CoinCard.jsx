import Image from "next/image";

import styles from "../styles/CoinCard.module.scss";

const CoinCard = ({ name, image, current_price }) => {
  const price =
    current_price > 9999 ? Math.trunc(current_price) : current_price.toFixed(2);

  return (
    <div className={styles.container}>
      <span>
        <Image src={image} alt={name} height={60} width={60} />
      </span>
      <span>{name}</span>
      <span>
        <strong>${price}</strong>
      </span>
    </div>
  );
};

export default CoinCard;
