import { isEmpty, getDateTime } from "shared-functions";

const componentName = "ApplicationFunctions";

export const getFetchAuthorization = () => {

  return window.btoa(JSON.stringify({ partnerID: 0, databaseName: "Projects" }));

};
