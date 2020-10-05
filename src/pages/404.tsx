import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../layout";
import config from "../../data/SiteConfig";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Page not found! | ${config.siteTitle}`} />
        <h1>NOT FOUND!</h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
