import React, { useEffect, useState } from "react";

export const EgEffect = () =>{

    const [values,setValues] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setValues([json]))
    },[])
    return(
    <>
         {/* {JSON.stringify(values)} */}
         {values.map(e=>  <h4>{e.title}</h4>  )}
    </>    
    )
}