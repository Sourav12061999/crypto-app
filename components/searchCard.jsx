import React from "react";
import styles from "../styles/search.module.css";
import { useRouter } from "next/dist/client/router";
function SearchCard({ coin }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.replace(`/Cryptocurrency/${coin.id}`);
      }}
      className={styles.main}
    >
      <div className={styles.img}>
        <img src={coin.image} alt="" />
      </div>
      <div className={styles.p}>
        <p>{coin.name}</p>
      </div>
    </div>
  );
}

export default SearchCard;
