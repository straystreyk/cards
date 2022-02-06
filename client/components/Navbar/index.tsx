import * as React from "react";
import Link from "next/link";

import { A } from "../Link";
import { Logo } from "../../static/icons";
import { navLinks, Links } from "../../static/constants";

import classes from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.navWrapper}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <nav className={classes.nav}>
            <ul>
              {navLinks.map(({ name, href }: Links, index: number) => {
                return (
                  <li key={name + index}>
                    <A href={href} text={name} />
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={classes.burger}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
