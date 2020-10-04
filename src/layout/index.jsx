import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

export const MainLayout = (props) => {
    const { children } = props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="bg" />
        </Helmet>
        {children}
      </div>
    );
}
