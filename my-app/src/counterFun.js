import React,{useState} from "react";
import './counter.css';

export const  One = () =>
{
    const [count,setCount] = useState(0)

    const handleIncreament = () => 
        setCount(count+1);
    
    const handleDecreament = () => 
        setCount(count-1);
    
    const Reset = () => 
        setCount(0);
    
    return (
        <div className="cont-1" >
        <div className="container" >
        <h1 >{count}</h1>
        <button className="btn btn-secondary p-2 decbtn" onClick={handleDecreament}> Minus count </button>
        <button className="btn btn-info p-2 resetbtn" onClick={Reset}> Reset </button>
        <button className="btn btn-secondary p-2 incbtn"onClick={handleIncreament}> plus count </button>
        </div>
        </div>
    )
}


