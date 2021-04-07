import React from "react";

function InputDinamic({ classStyle, icon, register, error, ...inputProps }) {

  return (
    <>
      <div className="control has-icons-left has-icons-right">
        <input
          className={`input ${error ? " is-danger" : "is-default"} ${classStyle}`}
          {...register}
          {...inputProps}
        />
        <span className="icon is-small is-left">
          <i className={`${icon}`}></i>
        </span>
        <span className="icon is-small is-right">
          <i className={`fas ${error ? "fa-exclamation-triangle" : "fa-check"}`}></i>
        </span>
      </div>
      {error && <p className="help is-danger">{error.message}</p>}
    </>
  );
}

export default InputDinamic;