import styles from "@/styles/Forms.module.css";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";

function BasicForm() {
  // Q5.1
  const [username, setUsername] = useState<string | number | readonly string[] | undefined>("");
  const [password, setPassword] = useState<string | number | readonly string[] | undefined>("");
  const [isUsernameTouched, setIsUsernameTouched] = useState<boolean>(false);
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [isPasswordTouched, setIsPasswordTouched] = useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const [pwLabelText, setPWLabelText] = useState<string | null>("Password");
  const [unLabelText, setUnLabelText] = useState<string | null>("Username");

  // When form is invalid, useEffect to show which form is invalid.
  const checkValidity = useEffect(() => {});

  function usernameChangeHandler(event: ChangeEvent) {
    setUsername(event.target.value);
  }

  function passwordChangeHandler(event: ChangeEvent) {
    setPassword(event.target.value);
  }

  function usernameBlurHandler() {
    setIsUsernameTouched(true);
  }

  function passwordBlurHandler() {
    setIsPasswordTouched(true);
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    // Q5.2.1 & Q5.4.1
    event.preventDefault();

    // Q5.2.2
    if (username == null || password == null) {
      return;
    }
    const usernameIsValid = username.trim().length >= 5;
    const passwordIsValid =
      password.trim().length >= 5 && new RegExp(/\d/).test(password);

    console.log(usernameIsValid, passwordIsValid);

    const isFormValid = usernameIsValid && passwordIsValid;

    // Q5.2.3
    if (usernameIsValid && passwordIsValid) {
      console.log("valid");
      prompt("Signed in!");
      setUsername("");
      setPassword("");
    } else {
      // 5.2.3 Do nothing

      // 5.5.1 Disable submit button when form is invalid
        setIsSubmitDisabled(true);
    }
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h2>Sign in</h2>
      <div className={styles["control-group"]}>
        <div className={isUsernameValid ? `${styles["form-control"]} `: `${styles["invalid"]}`}>
          <label htmlFor="username">{unLabelText}</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
          />
        </div>
        <div className={isPasswordValid ? `${styles["form-control"]} `: `${styles["invalid"]}`}>
          <label htmlFor="password">{pwLabelText}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
      </div>
      <div className={styles["form-actions"]}>
        <button type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default BasicForm;
