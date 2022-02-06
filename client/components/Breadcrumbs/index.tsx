import * as React from "react";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";

import { BreadCrumbsLinks, BreadCrumbsArrow } from "../../static/constants";
import classes from "./breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const matched = BreadCrumbsLinks.filter((el) => pathname.includes(el.href));

  const isLastBreadCrumb = matched[matched.length - 1];

  if (!pathname.length) {
    return <></>;
  }

  return (
    <div className="container">
      <div className={classes.breadCrumbsWrapper}>
        <Link href="/">
          <a className={classes.breadCrumb}>Главная</a>
        </Link>
        {matched.map((el) => (
          <div key={el.href} className={classes.breadCrumb}>
            <BreadCrumbsArrow />
            <Link href={el.href} key={el.href}>
              <a
                className={cn(
                  el.name === isLastBreadCrumb.name && classes.breadCrumbsActive
                )}
              >
                {el.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
