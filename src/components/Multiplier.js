import React from "react";
import { useCounterContext } from "../context/CounterContext";
const Multiplier = () =>{
const [count,{handleSetCount}] = useCounterContext()
const [val,setVal] =React.useState(0)
const [answer , setAnswer] = React.useState(0)
const handleMultiply =() =>{
    const cal = val * count 
    Math.ceil(cal)
    setAnswer(cal)
}
React.useEffect(()=>{
    handleSetCount(answer)
},[answer])
    return(

        <>
        <h1>Multilpier</h1>
        <h3>Count {count}</h3>
        <h2>Answer {answer}</h2>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={handleMultiply}>Multiply</button>
        </>
    )


}

export default Multiplier