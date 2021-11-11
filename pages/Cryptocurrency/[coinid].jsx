import React from "react";
import styles from "../../styles/coinid.module.css";
import Charts from "../../components/charts";
import { useRouter } from "next/dist/client/router";
function Coindetails({ data, chart }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.main}>
        {data ? (
          <>
            <div className={styles.left}>
              <p>Rank #{data.market_cap_rank}</p>
              <div className={styles.logo}>
                <img src={data.image.small} alt="" />
                <h2>
                  {data.name} ( {data.symbol.toUpperCase()} )
                </h2>
              </div>
              <h2>
                Current Price:- ${data.market_data.current_price.usd.toFixed(2)}
              </h2>
              <h2>
                Market Cap:- ${data.market_data.market_cap.usd.toFixed(2)}
              </h2>
              <h2>24H High:- ${data.market_data.high_24h.usd.toFixed(2)}</h2>
              <h2>24H Low:- ${data.market_data.low_24h.usd.toFixed(2)}</h2>
            </div>
            <div className={styles.right}>
              <h1>Info</h1>
              <h3>
                Webside:-{" "}
                <a href={data.links.homepage[0]} target="_blank">
                  {data.links.homepage[0]}
                </a>
              </h3>
              <h3>
                Reddit:-{" "}
                <a href={data.links.subreddit_url} target="_blank">
                  {data.links.subreddit_url}
                </a>
              </h3>
              <h3>
                Github Repo:-{" "}
                <a href={data.links.subreddit_url} target="_blank">
                  {data.links.repos_url.github[0]}
                </a>
              </h3>
            </div>
          </>
        ) : null}
      </div>
      <Charts coinid={data.id} chartData={chart} />
    </div>
  );
}

export default Coindetails;
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { coinid: "bitcoin" },
      },
      {
        params: { coinid: "ethereum" },
      },
      {
        params: { coinid: "binancecoin" },
      },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  let res2 = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.coinid}?localization=false&tickers=false&market_data=true&community_data=false`
  );
  let data = await res2.json();
  let res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.coinid}/market_chart?vs_currency=usd&days=7&interval=hourly`
  );
  let chart = await res.json();
  return {
    props: {
      data,
      chart,
    },
  };
}
