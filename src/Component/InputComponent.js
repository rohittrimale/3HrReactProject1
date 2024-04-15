import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

const InputComponent = (props) => {
  const inputHandler = (event) => {
    props.onDispatch({ type: "USER_DATA", val: event.target.value });
  };
  return (
    <input type={props.type} onChange={inputHandler} value={props.stateValue} />
  );
};

export default InputComponent;
