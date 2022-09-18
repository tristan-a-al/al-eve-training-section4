import styles from "@/styles/Forms.module.css";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";


//Q5.5.1 - 0/1 though you do Disable the button you don't implement proper logic to enable it again.
//Q5.5.2 - 0/1 You never change your states so you validation is never invalid.

function BasicForm() {
  // Q5.1 - 2/4  
  //you are over complicating your types. just string is fine when you set the default to string.
  // You did not complete the type for the change event. You need to tell it what element to use ChangeEvent<HTMLInputElement>
  const [username, setUsername] = useState<string | number | readonly string[] | undefined>("");
  const [password, setPassword] = useState<string | number | readonly string[] | undefined>("");
  
  //Q 5.2.2 - 4/7  Derived Variables expected.
  // you incorrectly scoped the isValid constants and no longer satisfies onBlur or on Keystroke validation.
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
 
  //Q5.3.1 - 3/3 good.
  const [isUsernameTouched, setIsUsernameTouched] = useState<boolean>(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState<boolean>(false);
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
    // Q5.2.1 
    event.preventDefault();

    // Q5.2.2 - incorrectly scoped
    if (username == null || password == null) {
      return;
    }
    const usernameIsValid = username.trim().length >= 5;
    const passwordIsValid =
      password.trim().length >= 5 && new RegExp(/\d/).test(password);

    console.log(usernameIsValid, passwordIsValid);

    // Q5.4.1 - 1/1 This is incorrectly scoped but will allow the point for correct logic
    const isFormValid = usernameIsValid && passwordIsValid;

    // Q5.2.3 - 2/3  to do nothing in a function you need to return out of it. 
    // Your code now disables the button and can only be enabled on refresh.
    // Also read your Questions properly. You were meant to use alert not prompt.

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
