import React from "react";
import styles from "../styles/coinlist.module.css";
import { useRouter } from "next/dist/client/router";
function Coinlist({ data }) {
  const router = useRouter();
  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push(`/Cryptocurrency/${data.id}`);
      }}
    >
      <div>
        <img src={data.image} alt="" />
      </div>
      <div>
        <p>{data.name}</p>
      </div>
      <div>
        <p>{data.symbol}</p>
      </div>
      <div>
        <p>${data.current_price.toFixed(2)}</p>
      </div>
      <div>
        <p>${data.market_cap.toFixed(2)}</p>
      </div>
      <div>
        <p>${data.high_24h.toFixed(2)}</p>
      </div>
      <div>
        <p>${data.low_24h.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Coinlist;
