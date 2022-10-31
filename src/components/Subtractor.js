import React from "react";
import { useCounterContext } from "../context/CounterContext";
const Subtractor = () =>{
const [count,{handleSetCount}] = useCounterContext()
const [val,setVal] =React.useState(0)
const [answer , setAnswer] = React.useState(0)
const handleSubtract =() =>{
    const cal = count - val
    
    setAnswer(Math.ceil(cal))
    
}
React.useEffect(()=>{
    handleSetCount(answer)
},[answer])
    return(

    <div style={{border:"2px solid green" ,margin:"10px" ,padding:"20px"}}>
    <h1>Subtractor</h1>
    <h3>Count {count}</h3>
    <h2>Answer {answer}</h2>
    <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={handleSubtract}>Subtract</button>
    </div>
)
}

export default Subtractor