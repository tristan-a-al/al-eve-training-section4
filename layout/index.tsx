import React, { ReactNode } from 'react';
import NavigationBar from './NavigationBar';
import styles from "@/styles/Home.module.css";
import Head from 'next/head';


interface LayoutProps{
    children:JSX.Element | null
}



function Layout({children}:LayoutProps) {
  return (
    <div>
        <Head>
        <title>EVE Section 5</title>
        <meta name="description" content="Section 4 in EVE React Evaluation. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavigationBar/>
        <main className={styles.main}>{children}</main>
      
    </div>
  )
}

export default Layout
