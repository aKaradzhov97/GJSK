import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../layout";
import config from "../../data/SiteConfig";

const HomePage = () => {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Home | ${config.siteTitle}`} />
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
        <h1>HOME</h1>
      </div>
    </Layout>
  );
};

export default HomePage;
