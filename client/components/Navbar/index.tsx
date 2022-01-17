import * as React from "react";

import { A } from "../Link";
import { HeaderLogo, SearchIcon } from "../../static/icons";
import { links, NavLink } from "../../static/constants";


import classes from "./Navbar.module.scss";

export const Navbar:React.FC = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.navWrapper}>
          <A href="/" className={classes.logo} icon={<HeaderLogo />} />
          <nav className={classes.nav}>
            <ul>
              {links.map(({ name, href }: NavLink, index: number) => {
                return (
                  <li key={name + index}>
                    <A href={href} text={name} />
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={classes.search}>
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
