import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import './regform.css';


const App = () =>{ 

    const city = ['chennai', 'Bengaluru', 'mumbai',
'chengalpattu', 'pondycherry', 'Kanchipuram']


    const formik = useFormik({
        initialValues : {
            FirstName:'',
            LastName:'',
            email:'',
            list:'',
            password:'',
            confirmPassword:'',

        },
        validationSchema:yup.object({
            FirstName:yup.string()
            .strict()
            .uppercase()
            .required("Enter Your First Name")
            .min(5,"minum 5 characters required")
            .max(15,"maximum 15 characters only"),
            LastName:yup.string()
            .strict()
            .uppercase()
            .required("Enter Your Last Name"),
            email:yup.string()
            .email()
            .required("Email is required"),
            list:yup.string()
            .required("Please select your city"),
            password: yup.string()
            .required("Enter your new password"),
            confirmPassword: yup.string()
            .oneOf([yup.ref('password'),null],"please enter the same password")
            .required("Confirm Your password")
        }),
        onSubmit:(userInputData)=>{
            console.log(userInputData);
        }
    })
    return(

        
            <div className="container mt-3" >
                <div className ="register-form">
                <form autoComplete="off" onSubmit={formik.handleSubmit}>

                    
                    {/* //first-name... */}
                    <div className="form">
                    <label>First Name:</label>
                    <input 
                    className="form-control"
                    type = "text" 
                    name = "FirstName" 
                    onChange={formik.handleChange} 
                    value={formik.values.FirstName} 
                    />
            
                    {formik.errors.FirstName?
                        <div style={{color:"red"}}>{formik.errors.FirstName}</div>:
                        null
                    }
                    </div>
                    
                    {/* Last-name */}
                    <div className="form">
                        <label>Last Name:</label>
                        <input
                        className="form-control"
                        type="text"
                        name="LastName"
                        onChange={formik.handleChange}
                        value={formik.values.LastName}
                        />

                        {formik.errors.LastName?
                            <div style={{color:"red"}}>{formik.errors.LastName}</div>:
                            null    
                        }
                    </div>


                    {/* //Email... */}
                    <div className="form">
                    <label>email:</label>
                    <input 
                    className="form-control"
                    type = "text" 
                    name="email"
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    />
                    
                    {formik.errors.email?
                        <div style={{color:"red"}}>{formik.errors.email}</div>:
                        null
                    }
                    </div>


                    <div className="form">
                    <label>password:</label>
                    <input 
                    className="form-control"
                    type = "Password" 
                    name="password"
                    onChange={formik.handleChange} 
                    value={formik.values.password} 
                    />
                    {formik.errors.password?
                        <div style={{color:"red"}}>{formik.errors.password}</div>:
                        null
                    }
                    </div>

                    <div className="form" >
                    <label>confirmPassword:</label>
                    <input 
                    className="form-control"
                    type = "Password" 
                    name="confirmPassword"
                    onChange={formik.handleChange} 
                    value={formik.values.confirmPassword} 
                    />
                    
                    {formik.errors.confirmPassword?
                        <div style={{color:"red"}}>{formik.errors.confirmPassword}</div>:
                        null
                    }
                    </div >

                    <div className="form">
                    <label>Select your City:</label>
                    <Autocomplete
                    className="form-control"
                    type="text"
                    name="list"
                    onChange={formik.values.list}
                    options={city}                              
                        renderInput={(params) =>
                        <TextField {...params} label="Combo box" />}
                    />

                    {formik.errors.list?
                        <div style={{color:"red"}}>{formik.errors.list}</div>:
                        null
                    }
                    </div>

                    

                    
                    <div className="btncenter">
                    <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
         </div>

    )
}

export default App;