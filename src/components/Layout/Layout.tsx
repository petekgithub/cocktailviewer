import { ReactNode } from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>made by HelloPettek</footer>
      </div>
    </>
  );
};

export default Layout;
