import { useState, useEffect } from "react";
import FormInput from "@/components/form/FormInput";
import {
  emailFormat,
  isEmpty,
  getDateTime,
  getFirstItem,
  convertSpecialCharacters,
  convertNullEmptyString,
  formatTrim,
  addLog,
  addErrorLog,
  getBrowserData,
  allowLogging
} from "shared-functions";

import type { APIData } from "@/types/Response";
import type { User, LoggedInUser } from "@/types/User";

type ProfileProps = {
  applicationVersion?: string;
  baseURL?: string;
  computerLog?: Record<string, unknown>;
  userIdentifier?: string;
  demonstrationMode?: boolean;
  environmentMode?: string;
  databaseAvailable?: boolean;
  sessionToken?: string | null;
  loggedInUser?: LoggedInUser | null;
  disabled?: boolean;
  sessionTokenName: string;
  handleNavigation: () => void;
  setFetchAuthorization: (
    sessionToken: string | null,
    environmentMode: string,
    demonstrationMode: boolean
  ) => string;
  setDatabaseAvailable: (value: boolean) => void;
  setUserTokenExpired: (value: boolean) => void;
  setLoggedInUser: (user: LoggedInUser) => void;
  addSuccessMessage: (message: string) => void;
  addErrorMessage: (message: string) => void;
  clearMessages: () => void;
};

type UserUpsert = {
  userID?: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  updatedBy: number | null;
};

type InlineErrors = {
  txtUsername?: string;
  txtFirstName?: string;
  txtLastName?: string;
  txtEmail?: string;
  txtPassword?: string;
};

// * noops -- 02/18/2026 JW
const noop = () => {};
const noopAuth = (_sessionToken: string | null, _environmentMode: string, _demo: boolean) => "";
const noopBool = (_value: boolean) => {};
const noopLoggedInUser = (_user: LoggedInUser) => {};
const noopMsg = (_message: string) => {};

const Profile = ({
  applicationVersion = "",
  baseURL = "",
  computerLog = {},
  userIdentifier = "",
  demonstrationMode = false,
  environmentMode = "",
  databaseAvailable = true,
  sessionToken = null,
  loggedInUser = null,
  disabled = false,
  sessionTokenName = "",
  handleNavigation = noop,
  setFetchAuthorization = noopAuth,
  setDatabaseAvailable = noopBool,
  setUserTokenExpired = noopBool,
  setLoggedInUser = noopLoggedInUser,
  addSuccessMessage = noopMsg,
  addErrorMessage = noopMsg,
  clearMessages = noop
}: ProfileProps) => {
  const [currentUser, setCurrentUser] = useState<LoggedInUser | null>(null);
  const [userID, setUserID] = useState<number | null>(null);
  const [txtUsername, setTxtUsername] = useState<string>("");
  const [txtFirstName, setTxtFirstName] = useState<string>("");
  const [txtLastName, setTxtLastName] = useState<string>("");
  const [txtEmail, setTxtEmail] = useState<string>("");
  const [txtPassword, setTxtPassword] = useState<string>("");

  const [inlineErrors, setInlineErrors] = useState<InlineErrors>({});

  useEffect(() => {
    const currentSessionToken = localStorage.getItem(sessionTokenName);

    // * When going directly to the page in a new tab or when refreshing, the loggedInUser isn't available yet in Redux so currentSessionToken is checked instead. -- 06/28/2024 MF
    // // * The check for only isEmpty(loggedInUser) won't work because, like in the above comment, currentSessionToken has a value and loggedInUser does not when this code is run. The check for loggedInUser must also have a check on the user role included. -- 08/26/2024 MF
    if (isEmpty(currentSessionToken) || isEmpty(loggedInUser)) {
      const operation = "Attempted Page Visit";

      addLog(
        baseURL,
        setFetchAuthorization("", environmentMode, demonstrationMode),
        databaseAvailable,
        allowLogging(),
        {
          operation,
          userIdentifier,
          href: window.location.href,
          applicationVersion,
          browserData: JSON.stringify(getBrowserData()),
          transactionData: { loggedInUser, computerLog },
          dateEntered: getDateTime()
        }
      );

      handleNavigation();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser]);

  const loadRecord = () => {
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
      setUserID(loggedInUser.userID ?? null);
      setTxtUsername(loggedInUser.username ?? "");
      setTxtFirstName(loggedInUser.firstName ?? "");
      setTxtLastName(loggedInUser.lastName ?? "");
      setTxtEmail(loggedInUser.email ?? "");
      setTxtPassword(""); // leave blank intentionally
      return;
    }

    setCurrentUser(null);
    setUserID(null);
    setTxtUsername("");
    setTxtFirstName("");
    setTxtLastName("");
    setTxtEmail("");
    setTxtPassword("");
  };

  useEffect(() => {
    loadRecord();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedInUser]);

  // * Clear inline error messages. -- 12/05/2023 JH
  useEffect(() => {
    if (!isEmpty(inlineErrors)) {
      if (!isEmpty(inlineErrors.txtFirstName) && !isEmpty(txtFirstName)) {
        setInlineErrors({
          ...inlineErrors,
          txtFirstName: ""
        });
      }

      if (!isEmpty(inlineErrors.txtLastName) && !isEmpty(txtLastName)) {
        setInlineErrors({
          ...inlineErrors,
          txtLastName: ""
        });
      }

      if (
        !isEmpty(inlineErrors.txtEmail) &&
        !isEmpty(txtEmail) &&
        !isEmpty(txtEmail.match(emailFormat))
      ) {
        setInlineErrors({
          ...inlineErrors,
          txtEmail: ""
        });
      }
    }
  }, [txtFirstName, txtLastName, txtEmail, inlineErrors]);

  const saveRecord = () => {
    // window.scrollTo(0, 0);

    clearMessages();

    const operation: string = "Save Record";

    let transactionValid: boolean = false;
    let errorMessages: string = "";
    let formatErrorMessages: string = "";

    let inlineErrorMessages: InlineErrors = {};

    // if (isEmpty(formatTrim(txtUsername))) {

    //   // * Make sure that the user's Username was entered. -- 06/24/2021 MF
    //   errorMessages = `${errorMessages}, <strong>Username</strong>`;

    // };

    if (isEmpty(formatTrim(txtFirstName))) {
      // * Make sure that the user's First Name was entered. -- 06/24/2021 MF
      // errorMessages = `${errorMessages}, <strong>First Name</strong>`;

      inlineErrorMessages = {
        ...inlineErrorMessages,
        txtFirstName: "Please enter the <strong>First Name</strong>."
      };
    }

    if (isEmpty(formatTrim(txtLastName))) {
      // * Make sure that the user's Last Name was entered. -- 06/24/2021 MF
      // errorMessages = `${errorMessages}, <strong>Last Name</strong>`;

      inlineErrorMessages = {
        ...inlineErrorMessages,
        txtLastName: "Please enter the <strong>Last Name</strong>."
      };
    }

    if (isEmpty(formatTrim(txtEmail))) {
      // * Make sure that the user's Email was entered. -- 06/24/2021 MF
      // errorMessages = `${errorMessages}, <strong>Email</strong>`;

      inlineErrorMessages = {
        ...inlineErrorMessages,
        txtEmail: "Please enter the <strong>Email</strong>."
      };
    } else {
      // * If txtEmail.match(emailFormat) === null (it is empty), it is not a valid email address. -- 08/03/2023 KH
      if (isEmpty(txtEmail.match(emailFormat))) {
        // formatErrorMessages = `${formatErrorMessages}<br />Please enter a valid email address for the <strong>Email</strong>.`;

        inlineErrorMessages = {
          ...inlineErrorMessages,
          txtEmail: "Please enter a valid email address for the <strong>Email</strong>."
        };
      }
    }

    // if (isEmpty(formatTrim(txtPassword))) {

    //   // * Make sure that the user's Password was entered. -- 06/24/2021 MF
    //   errorMessages = `${errorMessages}, <strong>Password</strong>`;

    // };

    if (!isEmpty(inlineErrorMessages)) {
      formatErrorMessages = `${formatErrorMessages}<br />Please fix the errors with the indicated fields in the form.`;
    }

    // * This is too slow running to label the transaction as valid or invalid. -- 05/06/2021 MF
    // errorMessages = buildErrorMessages("users", errorMessages, formatErrorMessages);

    if (!isEmpty(errorMessages)) {
      // errorMessages = `Please enter the user's ${errorMessages.substring(1)}.`;
      errorMessages = `Please enter the user's${errorMessages.replace(/^,/, "")}.`;
    }

    if (!isEmpty(formatErrorMessages)) {
      if (isEmpty(errorMessages)) {
        errorMessages = formatErrorMessages.replace(/<br\s*\/?>/, "");
      } else {
        // errorMessages = Parse(errorMessages + formatErrorMessages);
        errorMessages = errorMessages + formatErrorMessages;
      }
    }

    if (!isEmpty(errorMessages) || !isEmpty(inlineErrorMessages)) {
      if (!isEmpty(errorMessages)) {
        // * Display the error messages. -- 04/16/2021 MF
        // console.log(errorMessages);
        addErrorMessage(`${operation}: ${errorMessages}`);
      }

      if (!isEmpty(inlineErrorMessages)) {
        setInlineErrors(inlineErrorMessages);
      }

      transactionValid = false;
    } else {
      transactionValid = true;
    }

    if (transactionValid === true) {
      // if (isEmpty(userID)) {

      //   // * Add the record. -- 04/16/2021 MF
      //   processTransaction("I");

      // } else {

      // * Update the record. -- 04/16/2021 MF
      processTransaction("U");

      // }
    }
  };

  const processTransaction = (transactionType: string) => {
    const url: string = `${baseURL}users/`;
    let response: globalThis.Response;
    let data: APIData<User>;
    let operation: string = "";
    let method: string = "";
    const previousRecord: LoggedInUser | null = loggedInUser;
    const primaryKeyID: number | null = userID;

    const recordObject: UserUpsert = {
      // username: convertNullEmptyString(formatTrim(txtUsername)),
      firstName: convertNullEmptyString(formatTrim(txtFirstName)),
      lastName: convertNullEmptyString(formatTrim(txtLastName)),
      email: convertNullEmptyString(formatTrim(txtEmail)),
      password: convertNullEmptyString(formatTrim(txtPassword)),
      updatedBy: loggedInUser?.userID ?? null
    };

    // if (transactionType === "I") {

    //   // * Add the record. -- 04/16/2021 MF
    //   operation = "Added User";
    //   method = "POST";
    //   recordObject.active = true;

    // } else
    if (transactionType === "U") {
      // * Update the record. -- 04/16/2021 MF
      operation = "Updated User";
      method = "PUT";
      // url += primaryKeyID;
      recordObject.userID = primaryKeyID;
      // recordObject.active = loggedInUser.active;

      // } else if (transactionType === "D") {

      //   // * Delete the record. -- 06/02/2021 MF
      //   operation = "Deleted User";
      //   method = "PUT";
      //   url += primaryKeyID;
      //   recordObject.userID = primaryKeyID;
      //   recordObject.active = false;
    }

    fetch(url, {
      method: method,
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: setFetchAuthorization(sessionToken, environmentMode, demonstrationMode)
      }),
      body: JSON.stringify({ recordObject })
    })
      .then((results: globalThis.Response) => {
        response = results;

        if (response.status === 200) {
          return response.json();
        } else {
          addErrorLog(
            baseURL,
            setFetchAuthorization("", environmentMode, demonstrationMode),
            databaseAvailable,
            allowLogging(),
            {
              operation: `${operation} SQL Server`,
              transactionData: {
                url,
                response: {
                  ok: response.ok,
                  redirected: response.redirected,
                  status: response.status,
                  statusText: response.statusText,
                  type: response.type,
                  url: response.url
                },
                data,
                primaryKeyID,
                previousRecord,
                recordObject,
                applicationVersion,
                loggedInUser,
                computerLog
              },
              errorData: { message: `${response.status} ${response.statusText} ${response.url}` },
              dateEntered: getDateTime()
            }
          );

          if (response.status === 401) {
            setUserTokenExpired(true);
          }

          return Promise.reject(Error(response.status + " Fetch failed."));
        }
      })
      .then((results: APIData<User>) => {
        data = results;

        if (!isEmpty(data)) {
          if (data.transactionSuccess && !isEmpty(data.records)) {
            const dataRecord = getFirstItem(data.records);

            setTxtUsername(convertNullEmptyString(dataRecord.username));
            setTxtFirstName(convertNullEmptyString(dataRecord.firstName));
            setTxtLastName(convertNullEmptyString(dataRecord.lastName));
            setTxtEmail(convertNullEmptyString(dataRecord.email));
            setTxtPassword(convertNullEmptyString(dataRecord.password));

            const newLoggedInUser: LoggedInUser = {
              ...(currentUser ?? loggedInUser)!,
              username: convertNullEmptyString(dataRecord.username),
              firstName: convertNullEmptyString(dataRecord.firstName),
              lastName: convertNullEmptyString(dataRecord.lastName),
              email: convertNullEmptyString(dataRecord.email),
              password: convertNullEmptyString(dataRecord.password)
            };
            setLoggedInUser(newLoggedInUser);

            setDatabaseAvailable(true);

            addLog(
              baseURL,
              setFetchAuthorization("", environmentMode, demonstrationMode),
              databaseAvailable,
              allowLogging(),
              {
                operation,
                userIdentifier,
                href: window.location.href,
                applicationVersion,
                browserData: JSON.stringify(getBrowserData()),
                transactionData: { dataRecord, previousRecord, loggedInUser, computerLog },
                dateEntered: getDateTime()
              }
            );

            addSuccessMessage(`${operation}: ${data.message}`);
          } else {
            // console.error(operation, "data.message", data.message);

            addErrorMessage(`${operation}: ${data.message}`);

            addErrorLog(
              baseURL,
              setFetchAuthorization("", environmentMode, demonstrationMode),
              databaseAvailable,
              allowLogging(),
              {
                operation: `${operation} SQL Server`,
                transactionData: {
                  url,
                  response: {
                    ok: response.ok,
                    redirected: response.redirected,
                    status: response.status,
                    statusText: response.statusText,
                    type: response.type,
                    url: response.url
                  },
                  data,
                  primaryKeyID,
                  previousRecord,
                  recordObject,
                  applicationVersion,
                  loggedInUser,
                  computerLog
                },
                errorData: { message: data.message },
                dateEntered: getDateTime()
              }
            );
          }
        } else {
          addErrorMessage(`${operation}: No Results Returned.`);

          addErrorLog(
            baseURL,
            setFetchAuthorization("", environmentMode, demonstrationMode),
            databaseAvailable,
            allowLogging(),
            {
              operation: `${operation} SQL Server`,
              transactionData: {
                url,
                response: {
                  ok: response.ok,
                  redirected: response.redirected,
                  status: response.status,
                  statusText: response.statusText,
                  type: response.type,
                  url: response.url
                },
                data,
                primaryKeyID,
                previousRecord,
                recordObject,
                applicationVersion,
                loggedInUser,
                computerLog
              },
              errorData: { message: "No Results Returned." },
              dateEntered: getDateTime()
            }
          );
        }
      })
      .catch(error => {
        // console.error(operation, "error", error);

        addErrorMessage(
          `${operation}: ${convertSpecialCharacters(error.name)}: ${convertSpecialCharacters(error.message)}`
        );

        addErrorLog(
          baseURL,
          setFetchAuthorization("", environmentMode, demonstrationMode),
          databaseAvailable,
          allowLogging(),
          {
            operation,
            userIdentifier,
            transactionData: {
              primaryKeyID,
              previousRecord,
              recordObject,
              applicationVersion,
              loggedInUser,
              computerLog
            },
            errorData: {
              name: error.name,
              message: error.message,
              inner: error.inner,
              stack: error.stack
            },
            dateEntered: getDateTime()
          }
        );

        setDatabaseAvailable(false);
      });
  };

  return (
    <section className="section-block large">
      <h2>Profile</h2>

      <div className="field-legend-container">
        <div className="field-legend">
          <em>Note: Form fields that are grayed out are not able to be changed.</em>
        </div>
        <div className="field-legend">
          <span className="required"> * </span>indicates a required field.
        </div>
      </div>

      <form className="admin-form">
        <p>
          <strong>Username</strong>: {txtUsername}
        </p>

        <FormInput
          id="txtFirstName"
          type="text"
          label="First Name"
          isRequired={true}
          inlineError={inlineErrors.txtFirstName ?? ""}
          disabled={disabled}
          value={txtFirstName}
          updateValue={setTxtFirstName}
        />

        <FormInput
          id="txtLastName"
          type="text"
          label="Last Name"
          isRequired={true}
          inlineError={inlineErrors.txtLastName ?? ""}
          disabled={disabled}
          value={txtLastName}
          updateValue={setTxtLastName}
        />

        <FormInput
          id="txtEmail"
          type="text"
          label="Email"
          isRequired={true}
          inlineError={inlineErrors.txtEmail ?? ""}
          disabled={disabled}
          value={txtEmail}
          updateValue={setTxtEmail}
        />

        <FormInput
          id="txtPassword"
          type="text"
          label="Password (Only updated if a value is entered)"
          isRequired={true}
          disabled={disabled}
          value={txtPassword}
          updateValue={setTxtPassword}
        />

        <div className="flex-row">
          <button type="button" className="btn btn-primary" onClick={saveRecord}>
            Save
          </button>

          <button
            type="button"
            className="btn btn-dark-gray"
            onClick={() => {
              loadRecord();
              clearMessages();
              setInlineErrors({});
            }}
          >
            Reset
          </button>

          {/* <button type="button" className="btn btn-outline" onClick={() => { setCurrentUser({}); clearMessages() setInlineErrors({}); }}>Cancel</button> */}
        </div>
      </form>
    </section>
  );
};

export default Profile;
