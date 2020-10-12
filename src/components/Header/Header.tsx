import React from "react";
import { Link } from "gatsby";
import { Link as CustomLink } from "../Link/Link";
import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.headerTop}>
            <Link to="/">
              <Logo />
            </Link>
            <nav>
              <ul className={styles.list}>
                <li>
                  <a
                    href="https://docs.nestjs.com"
                    title="Documentation | NestJS - A progressive Node.js framework"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="https://enterprise.nestjs.com"
                    title="Enterprise | NestJS - A progressive Node.js framework"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://courses.nestjs.com"
                    title="Courses | NestJS - A progressive Node.js framework"
                  >
                    Standards
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.mainWrapper}>
            <h1>Kashooon!</h1>
            <h2>A real leader in cardboard boxes production industry.</h2>
            <div className={styles.buttonsWrapper}>
              <CustomLink>Products</CustomLink>
              <CustomLink>Services</CustomLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
