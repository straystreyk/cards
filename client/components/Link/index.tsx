import * as React from "react";
import Link from "next/link";
import cn from "classnames";

import classes from "./A.module.scss";

interface LinkProps {
  href: string;
  as?: string;
  text?: string;
  className?: string;
  icon?: React.ReactElement;
}

export const A: React.FC<LinkProps> = ({ href, as, text, className, icon }) => {
  return (
    <Link href={href} as={as}>
      <a className={cn(classes.mainLink, className)}>
        {icon}
        {text}
      </a>
    </Link>
  );
};
