import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styles from "./Link.module.scss";

export const Link = ({ children }) => {
  return (
    <GatsbyLink to={"/"} className={styles.linkPrimary}>
      {children}
    </GatsbyLink>
  );
};
