import React from "react";
import { useForm } from "react-hook-form";
import AutoComplete from "../components/AutoComplete";
import CitySearchComponent from "../components/CitySearchComponent";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  //   console.log(errors);

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <input
          type="text"
          className="form-input"
          name="fullname"
          placeholder="Full name"
          autoComplete="off"
          {...register("fullname", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="form-input"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          className="form-input"
          name="number"
          autoComplete="off"
          placeholder="Mobile number"
          {...register("phone", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />

        
        <CitySearchComponent />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default RegistrationForm;