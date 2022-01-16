import * as React from "react";
import Head from "next/head";

import { Navbar } from "../Navbar";

interface MainContainerProps {
  title: string;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className="content">
          <Navbar />
          {children}
        </div>
        <footer>footer</footer>
      </main>
    </>
  );
};
