import React from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
