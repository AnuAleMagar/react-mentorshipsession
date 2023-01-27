import React,{useState} from "react";
function Counter(){
    const [Count,setCount]=useState(0);
 function increase(){
    setCount(Count+1);
 }
return(<><button onClick={increase}>Click Me {Count}</button></>)
}
export default Counter;