import React from "react";
import { useCounterContext } from "../context/CounterContext";
const Counter = () =>{
const [count,{handleSetCount}] = useCounterContext()
 const handleIncrement = () =>{
    handleSetCount(Math.ceil (count +1))
 }
 const handleDecrement = () =>{
    handleSetCount(Math.floor(count -1))
 }
return(

    <>
    <h1>Counter Application</h1>
    <h2>{count} </h2>
    <button style={{marginRight:"6px"}} onClick={handleDecrement}>Decrement</button>
    <button onClick={handleIncrement}>Increament</button>
    </>
)
}
export default Counter