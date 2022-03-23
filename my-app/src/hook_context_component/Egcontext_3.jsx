import React, { useContext } from "react";
import { employeeContext, studentContext } from "../App";

export const Egcontext_3 = () => {

    const employee = useContext(employeeContext);

    return(
        <>
            <ul>
                {
                    employee.map(e => <li>{e}</li>)
                }
            </ul>
        </>
    )
}