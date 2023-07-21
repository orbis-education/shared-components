import React from 'react';
import { isEmpty, getDateTime } from "shared-functions";
import logo from "../../assets/images/OrbisLogo.svg";

const Header = (props) => {

  // * Available props: -- 07/17/2023 MF
  // * Properties: applicationName -- 07/17/2023 MF

  const componentName = "Header";

  let applicationName = isEmpty(props) === false && isEmpty(props.applicationName) === false ? props.applicationName : "0.0.0";

  document.title = "Orbis Education | " + applicationName;


  return (
    <header>

      <img src={logo} className="orbis-logo" alt="Orbis Education Logo" />

      <h1>{applicationName}</h1>

    </header>
  );
};

export default Header;