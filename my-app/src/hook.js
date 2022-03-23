import React, { useState } from "react";

export const State_con=()=>
{

const [name, setName] = useState("Barath")

const changeName = () =>{
    setName("BARATH");
}

return(
    <>
    <h1>{name}</h1>
    <button onClick={changeName}>ChangeName</button>
    </>
)
}