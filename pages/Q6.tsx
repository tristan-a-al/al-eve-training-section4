import BasicFormHook from "@/components/BasicFormHook"
import { NextPage } from "next"
import styles from '../styles/Home.module.css'

const Q52:NextPage = () => {
  return (
    <div className={styles.container}>

    <h1 className={styles.title}>
      Question 6
    </h1>

    <p className={styles.description}>
      Basic Form Validation Using an Input Hook
    </p>

    <div className={styles.grid}>

      <BasicFormHook/>

    </div>

</div>
  )
}

export default Q52
