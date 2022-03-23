import React, { useState } from "react";

export const EgState = () =>{

    const [name ,setName] = useState("jay")

    const changeName = () =>{
        setName("Hello Jay!");
    }
    return(
        <><h1>{name}</h1><button onClick={changeName}>Change Name</button></>
    )
}