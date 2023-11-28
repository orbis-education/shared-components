// import { isEmpty, getDateTime, isNonEmptyArray } from "shared-functions";

const componentName = "DeveloperFunctions";

export const showLocalDevelopment = (environmentMode) => {

  if (process.env.NODE_ENV === "development" && environmentMode !== "production") {

    return true;

  } else {

    return false;

  };

};


export const showDevelopment = (environmentMode) => {

  if ((process.env.NODE_ENV === "development" || process.env.REACT_APP_FORCE_DEVELOPMENT_MODE === "True" || environmentMode === "development") && environmentMode !== "production") {

    return true;

  } else {

    return false;

  };

};


export const showDemonstration = (environmentMode, demonstrationMode) => {

  if ( /* showDevelopment(environmentMode) === true || */ (demonstrationMode === true || process.env.REACT_APP_FORCE_DEMONSTRATION_MODE === "True") && environmentMode !== "production") {

    return true;

  } else {

    return false;

  };

};


export const showPlayground = (environmentMode, demonstrationMode) => {

  // * This should be true in two cases: -- 12/02/2021 MF
  // * 1. When showDevelopment === true
  // * 2. When window.location.href contains "intranet.orbiseducation.com/test_local/" or window.location.href contains "product.orbiseducation.com/for-review/" (and environmentMode !== "production")
  // * The intranet.orbiseducation.com/test_local directory is the location that the web developers can place code to test or demonstrate learning object functionality. -- 01/13/2023 MF
  // * The product.orbiseducation.com/for-review directory is the location that the ELD Team can place learning objects to test or demonstrate functionality. -- 01/13/2023 MF
  // * On these web servers, there may be other directories in which this behavior is not desired so the check needs to be at a directory level and not only at the web server level. -- 01/13/2023 MF

  if (showDevelopment(environmentMode, demonstrationMode) === true || ((window.location.href.includes("intranet.orbiseducation.com/test_local/") === true || window.location.href.includes("product.orbiseducation.com/for-review/") === true) && environmentMode !== "production")) {

    return true;

  } else {

    return false;

  };

};


// export const showSelectDataFile = (environmentMode, allowSelectDataFile) => {

//   if ( /* process.env.REACT_APP_DISPLAY_SELECT_DATA_FILE_COMPONENT !== "False" && */ allowSelectDataFile === true && showDevelopment(environmentMode) === true) {

//     return true;

//   } else {

//     return false;

//   };

// };


// export const showSelectPage = (environmentMode) => {

//   if ( /* process.env.REACT_APP_DISPLAY_LOAD_PAGE_COMPONENT !== "False" && */ showDevelopment(environmentMode) === true) {

//     return true;

//   } else {

//     return false;

//   };

// };


export const showErrorMessage = (environmentMode, alwaysShow) => {

  if ((process.env.NODE_ENV === "development" && environmentMode !== "production") || alwaysShow === true) {

    return true;

  } else {

    return false;

  };

};


export const allowLogging = ( /* baseURLLOR */) => {

  // // * Checking window.location.href.includes(baseURLLOR + "1387/index.html") and window.location.href.includes(baseURLLOR + "1293/index.html" are temporary to test on the LOR without other learning objects going out to production before this is ready. -- 01/14/2022 MF
  // if (process.env.NODE_ENV === "development" || window.location.href.includes("intranet.orbiseducation.com/test_local/") === true || window.location.href.includes(baseURLLOR + "1387/index.html") || window.location.href.includes(baseURLLOR + "1293/index.html") === true) {
  if (process.env.NODE_ENV !== "development" || process.env.REACT_APP_ALLOW_DEVELOPMENT_COMPUTERLOG === "True") {

    return true;

  } else {

    return false;

  };

};
