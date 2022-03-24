import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';


// const validate = values => {
//     var errors ={};
//     if(!values.name){
//         errors.name = "name is required "
//     }else if(values.name.length > 15){
//         errors.name = "max 16 characters only"
//     }
//     else if(values.name.length < 3){
//         errors.name = "min 3 characters is required"
//     }
//     return errors;
// }

const App = () =>{ 

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
            list: yup.string()
            .required("Please select"),
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
                    <div className="form-group">
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
                    <div className="form-group">
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

                    {/* select */}
                    <div className="form-group">
                       <label>Select city:</label>
                        <select
                        className="form-control" id= "sel1"
                        name = "list" 
                        onChange={formik.handleChange} 
                        value={formik.values.list}
                         >
                            <option value="">--select--</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Bengalur">Bengalur</option>
                            <option value="Hydrabad">Hydrabad</option>
                        </select>
                        {formik.errors.list?
                        <div style={{color:"red"}}>{formik.errors.list}</div>:
                        null
                    }
                    </div>

                    {/* //Email... */}
                    <div className="form-group">
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


                    <div className="form-grup">
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

                    <div className="form-group">
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
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
         </div>

    )
}

export default App;