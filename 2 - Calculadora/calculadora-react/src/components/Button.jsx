/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./Button.css";

export default (props) => {
  return <button className="button">{props.label}</button>;
};
