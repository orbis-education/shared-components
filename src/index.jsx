import React from "react";
import { createRoot } from "react-dom/client";
import { FormInput, Header, AlertPopup } from "../lib";
// * https://stackoverflow.com/questions/66384368/how-is-it-possible-to-access-homepage-from-package-json-in-a-react-app -- 12/17/2021 MF
// * Using Vite requires a different syntax. -- 09/22/2023 MF
import { version, copyrightYear } from '../package.json';
const applicationVersion = version;

// const componentName = "index";

// console.log(componentName, "applicationVersion", applicationVersion);
// console.log(componentName, "copyrightYear", copyrightYear);

const root = createRoot(document.getElementById("root"));

const App = () => (
	<div>
		<Header applicationName="Shared Components" />
		<FormInput inputType="text" placeholderText="hello" />
		<FormInput inputType="textarea" placeholderText="hello" />
		<FormInput inputType="password" />
		<AlertPopup message="also hello" alertType="success" />
		<AlertPopup message="also hello, again" alertType="error" />
		<footer className="copy">&copy; {copyrightYear} Orbis Education. All rights reserved. Version: {applicationVersion}</footer>
	</div>
);

root.render(<App />);

