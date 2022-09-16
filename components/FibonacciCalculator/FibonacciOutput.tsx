import React from "react"

interface Props {
    nValue: number
}

function FibonacciOutput(props: Props) {
    return <p id={`${props.nValue}th-term`}>{props.nValue}</p>
}
export default FibonacciOutput;