import React, { useState, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { Context1 } from "../pages/_app";
import SearchCard from "./searchCard";
function Navbar() {
  const router = useRouter();
  const [showSearch, setshowsearch] = useState("none");
  const [searchData, setsearchData] = useState("");
  const coinData = useContext(Context1);
  return (
    <nav>
      <div
        className="logo"
        onClick={() => {
          router.replace("/");
        }}
      >
        <img
          src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png"
          alt=""
        />
      </div>
      <div className="list">
        <h4
          onClick={() => {
            router.replace("/");
          }}
        >
          Home
        </h4>
        <h4>Exchanges</h4>
        <h4>Portfolio</h4>
        <h4>Signin/Signup</h4>
      </div>
      <div className="search">
        <input
          onFocus={() => {
            setshowsearch("block");
          }}
          onChange={(e) => {
            setsearchData(e.target.value);
          }}
          placeholder="Search"
          type="text"
        />
        <div
          onClick={() => {
            setshowsearch("none");
          }}
          className="search-proxy"
          style={{ display: showSearch }}
        ></div>
        <div className="search-result" style={{ display: showSearch }}>
          {coinData
            ?.filter((coin) => coin.id.includes(searchData))
            .map((el) => {
              return (
                <React.Fragment key={el.id}>
                  <SearchCard coin={el} />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
