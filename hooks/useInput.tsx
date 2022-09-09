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


    return{}

}


export default useInput;