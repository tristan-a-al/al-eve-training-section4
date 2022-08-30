import {screen, render, cleanup} from "@testing-library/react"

import FibonacciCalculator from "../components/FibonacciCalculator"
import FibonacciOutput from "../components/FibonacciCalculator/FibonacciOutput"


describe("FibonacciCalculator Component",()=>{

    // beforeEach(()=>{
    //     render(<FibonacciCalculator/>)
    // })

    afterEach(()=>{
        cleanup()
    })

    test("Make Sure boilerplate input is in place.",()=>{
        let dom = render(<FibonacciCalculator/>)
        let inputElement = dom.container.querySelector("#nth-value")

        expect(inputElement).toBeInTheDocument();
    })

    test("Make Sure boilerplate button is in place",()=>{
        let dom = render(<FibonacciCalculator/>)
        let buttonElement = dom.container.querySelector("#cal-btn")

        expect(buttonElement).toBeInTheDocument();
    })



})

describe("Testing The Fibonacci Output",()=>{

    test("Output test for 10th Term",()=>{
        let dom = render(<FibonacciOutput nValue={10}/>)

        let displayTag = dom.container.querySelector("#nth-term")

        expect(displayTag).toHaveTextContent("55")
    })

    test("Output test for 42nd Term",()=>{
        let dom = render(<FibonacciOutput nValue={42}/>)

        let displayTag = dom.container.querySelector("#nth-term")

        expect(displayTag).toHaveTextContent("267914296")
    })

    test("Output test for 20th Term",()=>{
        let dom = render(<FibonacciOutput nValue={20}/>)

        let displayTag = dom.container.querySelector("#nth-term")

        expect(displayTag).toHaveTextContent("6765")
    })
})

