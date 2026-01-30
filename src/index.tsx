import { createRoot } from "react-dom/client";
import "../lib/css/index.css";
import App from "./App";
// * https://stackoverflow.com/questions/66384368/how-is-it-possible-to-access-homepage-from-package-json-in-a-react-app -- 12/17/2021 MF
// * Using Vite requires a different syntax. -- 09/22/2023 MF
import { version, copyrightYear } from "../package.json";

// * from ai chat: -- 01/22/2026 JH
// * TypeScript error occurs because document.getElementById("root") can return null if an element with that ID doesn't exist, but createRoot() expects a non-null HTMLElement.
// * The ! (non-null assertion operator) tells TypeScript that you're confident the element exists.
const root = createRoot(document.getElementById("root")!);

root.render(<App applicationVersion={version} copyrightYear={copyrightYear} />);
