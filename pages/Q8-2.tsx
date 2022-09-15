import FilterComponent from '@/components/FilterComponent'
import RunAwayEffect from '@/components/RunAwayEffect'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Q82:NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EVE Section4: Q6</title>
        <meta name="description" content="Section 4 in EVE React Evaluation. " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Question 8:
        </h1>

        <p className={styles.description}>
          The below component filters a list of posts based on a selected user.
        </p>

        <div className={styles.grid}>


          <FilterComponent/>

          

        </div>
      </main>

    </div>
  )
}

export default Q82
