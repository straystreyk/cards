import * as React from "react";
import Head from "next/head";

import { Navbar } from "../Navbar";
import { Breadcrumbs } from "../Breadcrumbs";
import { Footer } from "../Footer";

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
          <Breadcrumbs />
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};
