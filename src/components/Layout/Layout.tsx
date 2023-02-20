import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>A. Dobson | Fullstack Web Developer</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
