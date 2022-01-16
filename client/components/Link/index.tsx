import * as React from "react";
import Link from "next/link";

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
      <a className={className}>
        {icon}
        {text}
      </a>
    </Link>
  );
};
