import { Component } from "react";

const RequiredFieldAsterisk = () => {

  Component.displayName = "RequiredFieldAsterisk";


  return (
    <span className="required"> * <span className="sr-only">required</span></span>
  );
};

export default RequiredFieldAsterisk;