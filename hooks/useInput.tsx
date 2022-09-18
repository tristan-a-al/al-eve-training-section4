import { ChangeEvent, FocusEvent, useState } from "react";

type ReactChangeEvent = ChangeEvent<HTMLInputElement>

type InputDefinition={
    value:string,
    hasError:boolean,
    inputChangeHandler: (e:ReactChangeEvent)=>void,
    inputBlurHandler: ()=>void,
    reset: ()=>void,
    isValid: boolean
}

const useInput=(validateValue: (value:any)=>boolean):InputDefinition=>{

    const defaultValue = "";
    const defaultHasError = false;
    const defaultIsValid = false;

    //Q6.1 - 2/5
    // hasError and isValid can both be derived variables
    // you did not use the Validate value to check  if the value is Valid
    //no isTouched State?


  //Expected similar :
  //let isValid = validateValue(value)
  //From the Question 5 we know that an input is invalid (has error)
  //when the value is invalid and has been touched
  //let hasError = !isValid && isTouched



    const [value, setValue] = useState<string>(defaultValue);
    const [hasError, setHasError] = useState<boolean>(defaultHasError);
    const [isValid, setIsValid] = useState<boolean>(defaultIsValid);
    
    
    //Q6.2 - 1/2 Read your Question. 
    //incorrect usage of Validation funtion
    //Value not updated onChange
    //isTouched not updated onBlur
    
    const inputChangeHandler = ((e: ReactChangeEvent)=> {
        validateValue(value);
    });
    const inputBlurHandler = (() => {
        validateValue(value);
    });

    //Q6.3 - 2/2
    const reset = () => {
        setValue(defaultValue);
        setHasError(defaultHasError);
        setIsValid(defaultIsValid);
    } 



    // if () {

    // }
    return {value, hasError, inputChangeHandler, inputBlurHandler, reset, isValid};

}


export default useInput;