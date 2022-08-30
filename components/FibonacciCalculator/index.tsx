import React from 'react'
import styles from "../../styles/Calculator.module.css"


function FibonacciCalculator() {

    // Q1.2 Here


    const handleNthUpdate=()=>{
        // Q1.3 Here
    }



  return (
    <div className={styles["cal-container"]}>
      <div className={styles["cal-input"]}>

        <label htmlFor="nth-value">Input a n-th Value:</label>
        <input type='number' id="nth-value"></input>

        <button id="cal-btn" onClick={handleNthUpdate}>Calculate</button>

      </div>
      <div className={styles["cal-output"]}>
        <div></div>
        
        {/* Q1.4 here */}

      </div>
    </div>
  )
}

export default FibonacciCalculator
