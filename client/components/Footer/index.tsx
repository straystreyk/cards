import * as React from "react";

import { FooterLogo } from "../../static/icons";
import classes from "./footer.module.scss";
import { navLinks } from "../../static/constants";
import { A } from "../Link";

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footerContent}>
          <FooterLogo />
          <div className={classes.footerNav}>
            {navLinks.map((el) => {
              return (
                <A
                  className={classes.footerLink}
                  key={el.href}
                  href={el.href}
                  text={el.name}
                />
              );
            })}
          </div>
          <span className={classes.copyright}>2022 © Cards.ru</span>
        </div>
      </div>
    </footer>
  );
};
