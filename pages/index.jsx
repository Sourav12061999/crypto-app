import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useContext } from "react";
import Coinlist from "../components/coinlist";
import { Context2 } from "./_app";
export default function Home({ data }) {
  const setCoindata = useContext(Context2);
  setCoindata(data);
  const [pageNo, setpageNo] = useState(0);
  let pagedData = data.slice(10 * pageNo, 10 * pageNo + 10);
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heading}>
        <h2>Coin Name</h2>
        <h2>Price</h2>
        <h2>Market Cap</h2>
        <h2>24H High</h2>
        <h2>24H Low</h2>
      </div>
      <div className={styles.table}>
        {pagedData.map((el) => {
          return (
            <div className={styles.card} key={el.id}>
              <Coinlist data={el} />
            </div>
          );
        })}
      </div>
      <div className={styles.page}>
        <button
          onClick={() => {
            if (pageNo > 0) {
              setpageNo(pageNo - 1);
            }
          }}
        >
          {"<"}
        </button>
        <p>{pageNo + 1}</p>
        <button
          onClick={() => {
            if (pageNo < 14) {
              setpageNo(pageNo + 1);
            }
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 100,
  };
}