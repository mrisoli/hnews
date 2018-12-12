import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

import "../../styles/style.scss";

export default ({ children }) => (
  <div className="layout">
    <Head>
      <title>Hacker News</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />

    <main>
      { children }
    </main>

    <Footer />
  </div>
);
