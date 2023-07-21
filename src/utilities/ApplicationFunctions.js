import parseHTML from "html-react-parser";
import { isEmpty, getDateTime } from "shared-functions";

const componentName = "ApplicationFunctions";

export const addComputerLog = (computerLogOne, computerLogTwo) => {

  let computerLog = { ...computerLogOne };

  if (typeof computerLogItem === "object") {

    // * From https://geolocation-db.com/json/ -- 09/27/2021 MF
    if (isEmpty(computerLogTwo.country_code) === false) {

      computerLog.countryCode = computerLogTwo.country_code;

    };

    if (isEmpty(computerLogTwo.country_name) === false) {

      computerLog.countryName = computerLogTwo.country_name;

    };

    if (isEmpty(computerLogTwo.city) === false) {

      computerLog.city = computerLogTwo.city;

    };

    if (isEmpty(computerLogTwo.postal) === false) {

      computerLog.postal = computerLogTwo.postal;

    };

    if (isEmpty(computerLogTwo.latitude) === false) {

      computerLog.latitude = computerLogTwo.latitude;

    };

    if (isEmpty(computerLogTwo.longitude) === false) {

      computerLog.longitude = computerLogTwo.longitude;

    };

    if (isEmpty(computerLogTwo.IPv4) === false) {

      computerLog.ipAddress = computerLogTwo.IPv4;

    };

    if (isEmpty(computerLogTwo.state) === false) {

      computerLog.state = computerLogTwo.state;

    };

    // * From https://api.db-ip.com/v2/free/self -- 09/27/2021 MF
    if (isEmpty(computerLogTwo.ipAddress) === false) {

      computerLog.ipAddress = computerLogTwo.ipAddress;

    };

    if (isEmpty(computerLogTwo.continentCode) === false) {

      computerLog.continentCode = computerLogTwo.continentCode;

    };

    if (isEmpty(computerLogTwo.continentName) === false) {

      computerLog.continentName = computerLogTwo.continentName;

    };

    if (isEmpty(computerLogTwo.countryCode) === false) {

      computerLog.countryCode = computerLogTwo.countryCode;

    };

    if (isEmpty(computerLogTwo.countryName) === false) {

      computerLog.countryName = computerLogTwo.countryName;

    };

    if (isEmpty(computerLogTwo.stateProvCode) === false) {

      computerLog.stateProvCode = computerLogTwo.stateProvCode;

    };

    if (isEmpty(computerLogTwo.stateProv) === false) {

      computerLog.state = computerLogTwo.state;

    };

    if (isEmpty(computerLogTwo.city) === false) {

      computerLog.city = computerLogTwo.city;

    };

  };

  return computerLog;

};


export const getFetchAuthorization = () => {

  return window.btoa(JSON.stringify({ partnerID: 0, databaseName: "Projects" }));

};


// * The parseHTML function from the npm package html-react-parser doesn't provide error handling if the value sent to it isn't a string. -- 03/09/2023 MF
export const parse = (value) => {

  let newValue = value;

  if (isEmpty(value) === false) {

    newValue = parseHTML(value);

  };

  return newValue;

};
