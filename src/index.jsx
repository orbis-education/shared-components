import React from "react";
import { createRoot } from "react-dom/client";
import { FormInput, FormDropdown, Header, AlertPopup } from "../lib";
// * https://stackoverflow.com/questions/66384368/how-is-it-possible-to-access-homepage-from-package-json-in-a-react-app -- 12/17/2021 MF
// * Using Vite requires a different syntax. -- 09/22/2023 MF
import { version, copyrightYear } from "../package.json";
const applicationVersion = version;

// const componentName = "index";

// console.log(componentName, "applicationVersion", applicationVersion);
// console.log(componentName, "copyrightYear", copyrightYear);

const root = createRoot(document.getElementById("root"));

const ddAccountType = "Please select the <strong>Account Type</strong>."

const inlineErrors = {
	txtUsername: "",
	txtPassword: "",
	ddAccountType: "",
	cbxUserPermissions: ""
}

const setDdAccountType = (value) => {
	console.log("setDdAccountType", value);
}

const App = () => (
	<div>
		<Header applicationName="Shared Components" />
		<FormInput formInputID="text" inputType="text" placeholderText="hello" />
		<FormInput formInputID="textarea" inputType="textarea" placeholderText="hello" />
		<FormInput formInputID="password" inputType="password" />
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
			inputValue={ddAccountType} 
			updateValue={setDdAccountType} 
		/>

		<AlertPopup message="also hello" alertType="success" />
		<AlertPopup message="also hello, again" alertType="error" />
		<footer className="copy">&copy; {copyrightYear} Orbis Education. All rights reserved. Version: {applicationVersion}</footer>
	</div>
);

root.render(<App />);
