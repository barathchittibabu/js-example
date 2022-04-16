import React from "react";
import { useForm } from "react-hook-form";
import CitySearchComponent from "./CitySearchComponent";
import './RegistrationForm.css'

function RegistrationForm() {

  const {handleSubmit,formState: { errors },

  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="list">
        <CitySearchComponent 
        className='inbox'
        /><br/>
        <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;