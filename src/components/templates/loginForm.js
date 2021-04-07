import React from "react";
import { useForm } from "react-hook-form";
import InputDinamic from "../UI/atoms/inputs";
import LabelDinamic from "../UI/atoms/labels";
import ButtonDinamic from "../UI/atoms/buttons";
import { Redirect, useHistory } from "react-router-dom";


const defaultValues = {
  username: undefined,
  password: undefined,
};


function LoginForm() {

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState
  } = useForm({
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange"
  });

 
  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
    history.push("/dashboard");
    return <Redirect to="/dashboard" />;
  };

  return (

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <LabelDinamic text="Username" />
          <div className="control has-icons-left has-icons-right">
            <InputDinamic
              classStyle="is-normal"
              type="text"
              placeholder="Enter your username or email"
              icon="fas fa-user"
              name="username"
              register={register("username", {
                required: {
                  value: true,
                  message: "You must enter your username or email",
                },
              })}
              error={errors.username}
            />
          </div>
        </div>
        <div className="field">
          <LabelDinamic text="Password" />
          <InputDinamic
            classStyle="is-normal"
            type="password"
            placeholder="Enter your password"
            icon="fas fa-key"
            name="password"
            register={register("password", {
              required: {
                value: true,
                message: "You must enter your password",
              },
              minLength: {
                value: 8,
                message: "Your name must be at least 8 characters",
              },
            })}
            error={errors.password}
          />
        </div>
        <hr className="login-hr"/>
        <ButtonDinamic
          classStyle="is-warning is-fullwidth mb-4 has-text-black"
          text="Login"
          type="submit"
          disabled={!formState.isValid}
        />
      </form>
      

  );
}

export default LoginForm;
