import BasicForm from "@/components/BasicForm"
import { NextPage } from "next"
import styles from '../styles/Home.module.css'

const Q51:NextPage = () => {
  return (
    <div className={styles.container}>

    <h1 className={styles.title}>
      Question 5
    </h1>

    <p className={styles.description}>
      Basic Form Validation with State Only
    </p>

    <div className={styles.grid}>

      <BasicForm/>

    </div>

</div>
  )
}

export default Q51
