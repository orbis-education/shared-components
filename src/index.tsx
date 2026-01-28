import { useState, FormEvent, KeyboardEvent } from "react";
import { createRoot } from "react-dom/client";
import {
  // AlertPopup,
  CheckboxDropdown,
  CheckboxGroup,
  FormDropdown,
  FormInput,
  FormRadioGroup,
  Footer,
  Header,
  NoResultsText,
  ToggleSwitch,
  Navigation
} from "../lib";
import "../lib/css/index.css";
// * https://stackoverflow.com/questions/66384368/how-is-it-possible-to-access-homepage-from-package-json-in-a-react-app -- 12/17/2021 MF
// * Using Vite requires a different syntax. -- 09/22/2023 MF
import { version, copyrightYear } from "../package.json";
const applicationVersion = version;

// * from ai chat: -- 01/22/2026 JH
// * TypeScript error occurs because document.getElementById("root") can return null if an element with that ID doesn't exist, but createRoot() expects a non-null HTMLElement.
// * The ! (non-null assertion operator) tells TypeScript that you're confident the element exists.
const root = createRoot(document.getElementById("root")!);

const inlineErrors = {
  txtUsername: "",
  txtPassword: "",
  ddAccountType: "",
  cbxUserPermissions: ""
};

const App = () => {

  const [txtName, setTxtName] = useState<string>("hi");
  const [txtMessage, setTxtMessage] = useState<string>("");
  const [txtPassword, setTxtPassword] = useState<string>("");
  const [ddAccountType, setDdAccountType] = useState<string>("");
  const [rdoClinicalReplacement, setRdoClinicalReplacement] = useState<boolean>(false);
  const [cbxGrpPartnerID, setCbxGrpPartnerID] = useState<unknown[]>([]);
  const [cbxSimulationID, setCbxSimulationID] = useState<unknown[]>([]);
  const [rdoProgramID, setRdoProgramID] = useState<string>("");
  const [componentToLoad, setComponentToLoad] = useState<string>("Home");

  const navigationItems = [
    {
      name: "Home",
      componentName: "Home",
      onClick: () => { window.scrollTo(0, 0); setComponentToLoad("Home"); }
    },
    {
      name: "Page 1",
      type: "dropdown",
      isPresent: true,
      dropdownItems: [
        {
          name: "Dropdown 1",
          componentName: "Dropdown1",
          onClick: () => { window.scrollTo(0, 0); setComponentToLoad("Dropdown1"); }
        },
        {
          name: "Dropdown Item 2",
          componentName: "Dropdown2",
          onClick: () => { window.scrollTo(0, 0); setComponentToLoad("Dropdown2"); }
        }
      ]
    },
    {
      name: "Page 2",
      componentName: "Page2",
      onClick: () => { window.scrollTo(0, 0); setComponentToLoad("Page2"); }
    },
    {
      name: "Another Nav Link",
      componentName: "Page3",
      onClick: () => { window.scrollTo(0, 0); setComponentToLoad("Page3"); }
    }
  ];


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    console.log("Form submitted!");

  };


  const handleEnterKey = (event: KeyboardEvent<HTMLTextAreaElement>) => {

    if (event.keyCode === 13 && event.shiftKey === false) {

      event.preventDefault();

      handleSubmit(event as unknown as FormEvent<HTMLFormElement>);

    }

  };


  return (
    <div>

      <Header applicationName="Shared Components" />

      <Navigation
        navigationItems={navigationItems}
        componentToLoad={componentToLoad}
      />

      <main>
        <section className="section-block mb-4"><NoResultsText>No sessions available.</NoResultsText></section>

        <section className="section-block mb-4">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3}>
                    <NoResultsText />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section-block">

          <form onSubmit={handleSubmit}>

            <FormInput
              id="txtName"
              label="Name"
              placeholder="Enter a name"
              hint="Please enter a name."
              value={txtName}
              maxLength={255}
              updateValue={setTxtName}
            />

            <FormInput
              id="txtMessage"
              type="textarea"
              label="Message"
              placeholder="Enter your message"
              value={txtMessage}
              updateValue={setTxtMessage}
              onKeyDown={handleEnterKey}
            />

            <FormInput
              id="password"
              type="password"
              label="Password"
              value={txtPassword}
              updateValue={setTxtPassword}
            />

            <FormDropdown
              id="ddAccountType"
              label="Account Type"
              isRequired={true}
              optionData={[
                { accountTypeID: 1, accountType: "User" },
                { accountTypeID: 2, accountType: "Admin" }
              ]}
              optionID="accountTypeID"
              optionText={[{ type: "property", text: "accountType" }]}
              inlineError={inlineErrors.ddAccountType}
              value={ddAccountType}
              updateValue={setDdAccountType}
            />

            <ToggleSwitch
              id="rdoClinicalReplacement"
              label="Will you be using the simulation for clinical replacement?"
              hint="Simulation equipment is prioritized for partners that use the simulation for clinical replacement."
              isRequired={true}
              value={rdoClinicalReplacement}
              updateValue={setRdoClinicalReplacement}
            />

            <CheckboxDropdown
              id="cbxGrpPartnerID"
              legend="Partner"
              placeholder="Select Partner(s)"
              optionData={[
                { accountTypeID: 1, accountType: "User" },
                { accountTypeID: 2, accountType: "Admin" }
              ]}
              optionID="accountTypeID"
              optionText={[{ type: "property", text: "accountType" }]}
              value={cbxGrpPartnerID}
              updateValue={setCbxGrpPartnerID}
            />

            <CheckboxGroup
              id="cbxSimulationID"
              legend="Simulation(s) Requested"
              isRequired={true}
              columns={2}
              optionData={[
                { accountTypeID: 1, accountType: "User" },
                { accountTypeID: 2, accountType: "Admin" }
              ]}
              optionID="accountTypeID"
              optionText={[{ type: "property", text: "accountType" }]}
              value={cbxSimulationID}
              updateValue={setCbxSimulationID}
            />

            <FormRadioGroup
              id="rdoProgramID"
              legend="Program"
              isRequired={true}
              columns={2}
              optionData={[
                { accountTypeID: 1, accountType: "User" },
                { accountTypeID: 2, accountType: "Admin" }
              ]}
              optionID="accountTypeID"
              optionText={[{ type: "property", text: "accountType" }]}
              value={rdoProgramID}
              updateValue={setRdoProgramID}
            />

            <div className="flex-row">
              <button type="button" className="btn btn-dark-gray">Reset</button>
            </div>

          </form>
        </section>
      </main>

      {/* <div className="alert-messages-container">
        <AlertPopup message="also hello" alertType="success" />
        <AlertPopup message="also hello, again" alertType="error" />
      </div> */}

      <Footer copyrightYear={copyrightYear} applicationVersion={applicationVersion} />
    </div>
  );
};

root.render(<App />);
