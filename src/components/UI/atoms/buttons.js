import React from "react";

function ButtonDinamic({classStyle, text, ...buttonProps}) {

  return (
    <button
      className={`button ${classStyle}`}
      {...buttonProps}>{text}
    </button>
  );
}

export default ButtonDinamic;
