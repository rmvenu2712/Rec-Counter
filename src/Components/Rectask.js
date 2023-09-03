import { useState } from "react";

function Rectask(){
    const [color,setColors]=useState("Hi")

const Click=()=>{
    const [color,setColors]=useState("Hi")
    setColors("Hello")
}
    return(
        <>
        <h1>{color}</h1>
        <button type="button" onClick={Click}>Click</button>
        
        </>
    )
}export default  Rectask;