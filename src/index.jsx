import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { FormInput, FormDropdown, ToggleSwitch, Header, AlertPopup, CheckboxDropdown, CheckboxGroup, FormRadioGroup } from "../lib";
// * https://stackoverflow.com/questions/66384368/how-is-it-possible-to-access-homepage-from-package-json-in-a-react-app -- 12/17/2021 MF
// * Using Vite requires a different syntax. -- 09/22/2023 MF
import { version, copyrightYear } from "../package.json";
import "../lib/css/index.css";
const applicationVersion = version;

// const componentName = "index";

// console.log(componentName, "applicationVersion", applicationVersion);
// console.log(componentName, "copyrightYear", copyrightYear);

const root = createRoot(document.getElementById("root"));

const ddAccountType = "Please select the <strong>Account Type</strong>.";

const inlineErrors = {
  txtUsername: "",
  txtPassword: "",
  ddAccountType: "",
  cbxUserPermissions: ""
};

const setDdAccountType = (value) => {
  console.log("setDdAccountType", value);
};

const App = () => {

  const [txtName, setTxtName] = useState("hi");
  const [txtMessage, setTxtMessage] = useState("");
  const [rdoClinicalReplacement, setRdoClinicalReplacement] = useState(false);
  const [cbxGrpPartnerID, setCbxGrpPartnerID] = useState("");
  const [cbxSimulationID, setCbxSimulationID] = useState("");
  const [rdoProgramID, setRdoProgramID] = useState("");


  const handleSubmit = (event) => {

    event.preventDefault();

    console.log("Form submitted!");

  };


  const handleEnterKey = (event) => {

    if (event.keyCode === 13 && event.shiftKey === false) {

      event.preventDefault();

      handleSubmit(event);

    };

  };


  return (
    <div>

      <Header applicationName="Shared Components" />

      <main>
        <section className="section-block">
          <form onSubmit={(event) => { handleSubmit(event); }}>

            <FormInput
              formInputID="txtName"
              labelText="Name"
              placeholderText="Enter a name"
              inputHint="Please enter a name."
              inputDisabled={true}
              inputValue={txtName}
              updateValue={setTxtName}
            />

            <FormInput
              formInputID="txtMessage"
              inputType="textarea"
              labelText="Message"
              placeholderText="Enter your message"
              inputDisabled={true}
              inputValue={txtMessage}
              updateValue={setTxtMessage}
              onKeyDown={handleEnterKey}
            />

            <FormInput
              formInputID="password"
              inputType="password"
              inputDisabled={true}
            />

            <FormDropdown
              formInputID="ddAccountType"
              labelText="Account Type"
              isRequired={true}
              optionData={[
                { accountTypeID: 1, accountType: "User" },
                { accountTypeID: 2, accountType: "Admin" }
              ]}
              optionID="accountTypeID"
              optionText={[{ type: "property", text: "accountType" }]}
              inlineError={inlineErrors.ddAccountType}
              inputDisabled={true}
              inputValue={ddAccountType}
              updateValue={setDdAccountType}
            />

            <ToggleSwitch
              formInputID="rdoClinicalReplacement"
              labelText="Will you be using the simulation for clinical replacement?"
              inputHint="Simulation equipment is prioritized for partners that use the simulation for clinical replacement."
              isRequired={true}
              inputDisabled={true}
              inputValue={rdoClinicalReplacement}
              updateValue={setRdoClinicalReplacement}
            />

            <CheckboxDropdown
              formInputID="cbxGrpPartnerID"
              legendText="Partner"
              placeholderText="Select Partner(s)"
              optionData={[
                { accountTypeID: 1, accountType: "User" },
                { accountTypeID: 2, accountType: "Admin" }
              ]}
              optionID="accountTypeID"
              optionText={[{ type: "property", text: "accountType" }]}
              inputDisabled={true}
              inputValue={cbxGrpPartnerID}
              updateValue={setCbxGrpPartnerID}
            />

            <CheckboxGroup
              formInputID="cbxSimulationID"
              legendText="Simulation(s) Requested"
              isRequired={true}
              formColumns={2}
              optionData={[
                { accountTypeID: 1, accountType: "User" },
                { accountTypeID: 2, accountType: "Admin" }
              ]}
              optionID="accountTypeID"
              optionText={[{ type: "property", text: "accountType" }]}
              inputDisabled={true}
              inputValue={cbxSimulationID}
              updateValue={setCbxSimulationID}
            />

            <FormRadioGroup
              formInputID="rdoProgramID"
              legendText="Program"
              isRequired={true}
              formColumns={2}
              optionData={[
                { accountTypeID: 1, accountType: "User" },
                { accountTypeID: 2, accountType: "Admin" }
              ]}
              optionID="accountTypeID"
              optionText={[{ type: "property", text: "accountType" }]}
              inputDisabled={true}
              inputValue={rdoProgramID}
              updateValue={setRdoProgramID}
            />

            <div className="flex-row">
              <button type="button" className="btn btn-dark-gray" disabled={true}>Reset</button>
            </div>

          </form>
        </section>
      </main>

      {/* <div className="alert-messages-container">
        <AlertPopup message="also hello" alertType="success" />
        <AlertPopup message="also hello, again" alertType="error" />
      </div> */}

      <footer className="copy">&copy; {copyrightYear} Orbis Education. All rights reserved. Version: {applicationVersion}</footer>
    </div>
  );
};

root.render(<App />);
