import AuthForm from "@/components/AuthForm"
import { NextPage } from "next"
import styles from '../styles/Home.module.css'

const Q53:NextPage = () => {
  return (
    <div className={styles.container}>

    <h1 className={styles.title}>
      Question 7
    </h1>

    <p className={styles.description}>
      Simple Authentication and Session Managagemnt
    </p>

    <div className={styles.grid}>

      <AuthForm/>

    </div>

</div>
  )
}

export default Q53
