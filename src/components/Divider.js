import React from "react"
import { useCounterContext } from "../context/CounterContext"
const Divider = () =>{
const [count,{handleSetCount}] =useCounterContext()
const [val,setVal] =React.useState(0)
const [answer , setAnswer] = React.useState(0)
const handleDivide =() =>{
    setAnswer(count / val)
}
React.useEffect(()=>{
    handleSetCount(answer)
},[answer])
 return(

    <>
    <h1>Divider</h1>
    <h3>{count}</h3>
    <h2>Answer {answer}</h2>
    <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={handleDivide}>Divide</button>
    </>
 )
    
}

export default Divider