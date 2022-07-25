import Image from "next/image";
import Link from "next/link";

import styles from "../styles/CoinCard.module.scss";

const CoinCard = ({ id, name, image, current_price }) => {
  const price =
    current_price > 1000 ? Math.trunc(current_price) : current_price.toFixed(3);

  return (
    <Link href={`/coin/${id}`}>
      <div className={styles.container}>
        <span>
          <Image src={image} alt={name} height={60} width={60} />
        </span>
        <span>{name}</span>
        <span>
          <strong>${price}</strong>
        </span>
      </div>
    </Link>
  );
};

export default CoinCard;
