import React from "react";
import { Helmet } from "react-helmet";
import "../styles/config.scss";
import config from "../../data/SiteConfig";
import * as styles from "./index.module.scss";
import { Header } from "../components/Header/Header";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.layoutContainer}>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="bg" />
      </Helmet>
      <Header />
      {children}
    </div>
  );
};
