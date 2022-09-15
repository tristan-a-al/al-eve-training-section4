import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EVE Section 6</title>
        <meta name="description" content="Section 6 in EVE React Evaluation. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Question 8: Optimisation
        </h1>

        <p className={styles.description}>
          This will evaluate your understanding of React hooks, types and data handling.
        </p>

        <div className={styles.grid}>


          <Link href="/Q8-1"><div className={styles.card}>
              <p> Start Here </p>
            </div></Link>

          

        </div>
      </main>

    </div>
  )
}

export default Home
