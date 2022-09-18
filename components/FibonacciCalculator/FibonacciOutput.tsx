import React from "react"

interface Props {
    nValue: number
}
//Q 4.4 - 2/6 Calculation was correct and it works but otherwise none of the instructions were followed.
function FibonacciOutput(props: Props) {
    return <p id={`${props.nValue}th-term`}>{props.nValue}</p>
}
export default FibonacciOutput;