import { isEmpty } from "shared-functions";


// ? Add to shared-functions? -- 08/29/2025 JH
export const returnActiveClass = (componentName, componentToLoad, classList) => {

  let newClassList = !isEmpty(classList) ? classList : "";

  newClassList += componentName === componentToLoad ? " active" : "";

  return newClassList;

};
