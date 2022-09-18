import styles from "@/styles/Forms.module.css";
import { FormEvent, useState, useRef } from "react";
import { signIn } from "next-auth/react";
import Credentials from "next-auth/providers/credentials";

function AuthForm() {
  const [isSignin, setIssignin] = useState<boolean>(false);

  // Q7.1.1 - 1/2 You need to type your refs
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  function switchAuthHandler() {
    setIssignin((prevState) => !prevState);
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSignin) {
      // Question 7.1.3 - 1/5
      signIn(Credentials, )
    } else {
      // Question 7.1.2 - 2/4
      // Question asks to create the function and CALL it in the submitHandler. Not to declare the funtion here. 
      //Though that is not what you are scored on. You lost 2 points for not calling it and did not create the function correctly. 
      //fetch returns a promise so you were meant create an async funtion and await the response.
      
      // Adding signup function here as requested in question, although normally I would write this function in the component's main body
      const signUp = (email: string, password: string) => {
        const credentials = { email, password };
        let response;
        return fetch("/api/auth/signup", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(credentials),
        })
          .then((response) => response.json())
          .then((data) => {
            return data;
          });
      };
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>{isSignin ? "Sign in" : "Sign up"}</h2>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" ref={usernameRef} required />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit">Submit</button>
        <a onClick={switchAuthHandler}>
          {!isSignin ? "Sign in" : "Sign up"} instead?
        </a>
      </div>
    </form>
  );
}

export default AuthForm;
