import styles from "@/styles/Forms.module.css"
import { FormEvent,  useState } from "react"
import {signIn} from "next-auth/react"


function AuthForm() {
    const [isSignin, setIssignin] = useState<boolean>(false)


    function switchAuthHandler(){
        setIssignin((prevState)=>!prevState)
    }


    
    async function submitHandler(event:FormEvent<HTMLFormElement>){
        event.preventDefault()

        if(isSignin){
            signIn('credentials',{redirect:false, email:"Question 7.1.4", password:"Question 7.1.4"})
        }else{
            // Question 7.3.1
        }

    }
    
    
  return (
    <form onSubmit={submitHandler} className={styles.form}>
        <h2>{isSignin ? 'Sign in':'Sign up'}</h2>
        <div className={styles["control-group"]}>
            <div className={styles["form-control"]}>
                <label htmlFor="username">User Name</label>
                <input  type="text" id="username" required />
            </div>
            <div className={styles["form-control"]}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
            </div>
        </div>
        <div className={styles["form-actions"]}>
            <button type="submit">Submit</button>
            <a onClick={switchAuthHandler}>{!isSignin ? 'Sign in':'Sign up'} instead?</a>
        </div>
    </form>
  )
}

export default AuthForm
