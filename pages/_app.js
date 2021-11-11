import "../styles/globals.css";
import Navbar from "../components/navbar";
import "../styles/navbar.css";
import React, { useState } from "react";
export const Context1 = React.createContext();
export const Context2 = React.createContext();
function MyApp({ Component, pageProps }) {
  const [coindata, setcoindata] = useState([]);
  return (
    <Context1.Provider value={coindata}>
      <Context2.Provider value={setcoindata}>
        <Navbar />
        <Component {...pageProps} />
      </Context2.Provider>
    </Context1.Provider>
  );
}

export default MyApp;
