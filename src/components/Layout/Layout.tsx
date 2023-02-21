import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "../Nav/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>A. Dobson | Fullstack Web Developer</title>
        <meta
          name="description"
          content="Andrew Dobson Fullstack Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
