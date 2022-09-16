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

    const [value, setValue] = useState<string>(defaultValue);
    const [hasError, setHasError] = useState<boolean>(defaultHasError);
    const [isValid, setIsValid] = useState<boolean>(defaultIsValid);
    const inputChangeHandler = ((e: ReactChangeEvent)=> {
        validateValue(value);
    });
    const inputBlurHandler = (() => {
        validateValue(value);
    });
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