import styles from "@/styles/Forms.module.css"
import { FormEvent } from "react"


function BasicForm() {
    // Q5.1


    function submitHandler(event:FormEvent<HTMLFormElement>){
        // Q5.2.1
        event.preventDefault()
        
    }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
        <h2>Sign in</h2>
        <div className={styles["control-group"]}>
            <div className={`${styles["form-control"]} `}>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" />
            </div>
            <div className={`${styles["form-control"]} `}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
            </div>
        </div>
        <div className={styles["form-actions"]}>
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default BasicForm
