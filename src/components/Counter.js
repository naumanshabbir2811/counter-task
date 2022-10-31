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

    <div style={{border:"1px solid blue" ,margin:"10px" ,padding:"20px"}}>
    <h1>Counter Application</h1>
    <h2>Count {count} </h2>
    <button style={{marginRight:"6px"}} onClick={handleDecrement}>Decrement</button>
    <button onClick={handleIncrement}>Increament</button>
    </div>
)
}
export default Counter