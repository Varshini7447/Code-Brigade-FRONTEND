// import { useState } from "react"

// export const Events=()=>{
//     const [name,setName]=useState();
//     const ChangeName=()=>{
//         setName("vijaya")
//         alert(name)
//     }
//     return (
//         <> 
//         <button onClick={()=>ChangeName()}>onClick</button>
//         <button onDoubleClick={()=>ChangeName()}>doubleClick </button> 
//         <button onMouseDown={()=>ChangeName()}>onMouseDown</button>
//         <button onMouseLeave={()=>ChangeName()}>onMouseLeave</button>
//         <button onMouseOver={()=>ChangeName()}>onMouseOver</button>
//         <button onClickCapture={()=>ChangeName()}>onClickCapture</button>
//         </>
//     )
// }; 
  import {useState,useEffect} from "react"
import { Prop } from "../props/props";


  export const Events=()=>{
    const[count,setCount]=useState(-2)
    const Count=()=>{
        setCount(count+2)
    }
    useEffect(()=>{
        setCount(count+2)
    },[count])

    return(
        <>
        <h3>Count is:{count}</h3>
        <button onClick={()=>Count()}>Update</button>  
        <Prop vijaya={count}/>
        </>
    )
  };