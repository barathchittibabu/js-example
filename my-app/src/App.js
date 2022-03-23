import React, { useState } from "react"; 
import { Egcontext_1 } from "./hook_context_component/Egcontext_1";

export const employeeContext = React.createContext([]);

function App() {

    const [value,setValue] = useState("");
    const[employeeNames,setEmployeeName] = useState([]);

    const myChange = (e) => {
        setValue(e.target.value);
    }

    const mySubmit = (e) =>{
        e.preventDefault();
        setEmployeeName(names =>[...names,value]);
    }

    return(

        <>
        <form onSubmit={mySubmit}>
            <input type="text" value={value} onChange={myChange} />
            <button type ="submit">Submit</button>
        </form>
        
        <employeeContext.Provider value={employeeNames}>
        <Egcontext_1/>
        </employeeContext.Provider>
        </>
    )
}


export default App;