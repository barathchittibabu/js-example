import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from 'yup';

const Sign = () =>{

    const formik = useFormik({
        initialValues : {
            email:'',
            password:'',
            confirmPassword:''
        },
        validationSchema:yup.object({
            email:yup.string()
            .email()
            .required("Email is required"),
            password:yup.string()
            .required("Enter Your Password"),
            confirmPassword:yup.string()
            .oneOf([yup.ref('password'),null],"Please Enter The Same Password")
            .required("Confirm Your Password")
        }),
        onSubmit:(userInputData)=>{
            console.log(userInputData);
        }
    })

    return(
        <div style={{maxWidth:380, width:"90%" , margin:"auto" }}>
        <div className="container mt-5">
                <form>
                    {/* email */}
                    <div className="form-group">
                        <label>email:</label>
                        <input 
                        className="form-control"
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                        {formik.errors.email?
                        <div style={{color:"red"}}>{formik.errors.email}</div>:
                        null
                        }
                    </div>

                    <div className="form-group">
                        <label>password:</label>
                        <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                        {formik.errors.password?
                        <div style={{color:"red"}}>{formik.errors.password}</div>:
                        null
                        }
                    </div>

                    <div className="form-group">
                        <label>confirmPassword:</label>
                        <input 
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        />
                        {formik.errors.confirmPassword?
                        <div style={{color:"red"}}>{formik.errors.confirmPassword}</div>:
                        null
                        }
                    </div> 
                    <div style={{marginLeft:130 ,padding:10}}>
                    <button className="btn btn-secondary">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Sign;