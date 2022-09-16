import React, { useRef, useState } from "react";
import styles from "../../styles/Calculator.module.css";
import FibonacciOutput from "./FibonacciOutput";


function FibonacciCalculator() {
  // Q4.2 Here
  const [mVal, setMVal] = useState<number>(1);
  const [nVal, setNVal] = useState<number>(1);
  const enteredNum = useRef<HTMLInputElement>(null);

  const handleNthUpdate = () => {
    // Q4.3 Here
    if (
      enteredNum == null ||
      enteredNum.current == null ||
      enteredNum.current.value == null
    )
      return;

      const fibSeqFormula = (n: number) => {
        const pPhi = ((1 + Math.sqrt(5)) / 2);
        const pphi = ((1 - Math.sqrt(5)) / 2);
        return Math.round(((Math.pow(pPhi, n) - (Math.pow(pphi, n))) / Math.sqrt(5)));
      }

      const n = parseInt(enteredNum.current.value);
      setNVal(fibSeqFormula(n));
  };

  return (
    <div className={styles["cal-container"]}>
      <div className={styles["cal-input"]}>
        <label htmlFor="nth-value">Input a n-th Value:</label>
        <input type="number" id="nth-value" ref={enteredNum}></input>

        <button id="cal-btn" onClick={handleNthUpdate}>
          Calculate
        </button>
      </div>
      <div className={styles["cal-output"]}>
        <div></div>

        {/* Q4.4 here */}
        <FibonacciOutput nValue={nVal} />
      </div>
    </div>
  );
}

export default FibonacciCalculator;
