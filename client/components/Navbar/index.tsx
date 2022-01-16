import * as React from "react";
import classes from "./Navbar.module.scss";
import { A } from "../Link";
import { HeaderLogo } from "../../static/icons";

interface NavLink {
  href: string;
  name: string;
}

const links: NavLink[] = [
  { href: "/cards", name: "Карты" },
  { href: "/credits", name: "Кредиты" },
  { href: "/mortgage", name: "Ипотека" },
  { href: "/deposits", name: "Вклады" },
  { href: "/investment", name: "Инвестиции" },
  { href: "/articles", name: "Статьи" },
];

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className={classes.navWrapper}>
          <div className={classes.logo}>
            <HeaderLogo />
          </div>
          <nav>
            <ul>
              {links.map(({ name, href }: NavLink, index: number) => {
                return (
                  <li key={name + index}>
                    <A href={href} text={name} />
                  </li>
                );
              })}
            </ul>
            <div className={classes.search}></div>
          </nav>
        </div>
      </div>
    </header>
  );
};
