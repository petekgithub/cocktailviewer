import Head from "next/head";
import { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = "CocktailViewer" }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="The CocktailViewer app using the CocktailDB API with NextJS and Sass"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>Header Content</header>
      <nav className={styles.nav}>Navigation Menu</nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer Content</footer>
    </div>
  );
};

export default Layout;
