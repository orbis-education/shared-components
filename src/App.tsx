import { useState, SubmitEvent, KeyboardEvent, useEffect } from "react";
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
  Navigation,
  DialogBoxConfirmation,
  useDialogBoxConfirmation,
  SortableList,
  useDragAndDropSort
} from "../lib";

const inlineErrors = {
  txtUsername: "",
  txtPassword: "",
  ddAccountType: "",
  cbxUserPermissions: ""
};

type AppProps = {
  applicationVersion?: string;
  copyrightYear?: string;
};

type ListItem = {
  listID: number;
  listItemName: string;
  listItemSubtitle?: string;
};

const initialList: ListItem[] = [
  {
    listID: 1,
    listItemName: "Item 1"
  },
  {
    listID: 2,
    listItemName: "Item 2"
  },
  {
    listID: 3,
    listItemName: "Item 3"
  },
  {
    listID: 4,
    listItemName: "Item 4",
    listItemSubtitle: "Item 4 subtitle"
  },
  {
    listID: 5,
    listItemName: "Item 5"
  }
];

const App = ({ applicationVersion = "0.0.0", copyrightYear = "2025" }: AppProps) => {
  const [txtName, setTxtName] = useState<string>("hi");
  const [txtMessage, setTxtMessage] = useState<string>("");
  const [txtPassword, setTxtPassword] = useState<string>("");
  const [ddAccountType, setDdAccountType] = useState<string>("");
  const [rdoClinicalReplacement, setRdoClinicalReplacement] = useState<boolean>(false);
  const [cbxGrpPartnerID, setCbxGrpPartnerID] = useState<string[]>([]);
  const [cbxSimulationID, setCbxSimulationID] = useState<string[]>([]);
  const [rdoProgramID, setRdoProgramID] = useState<string>("");
  const [componentToLoad, setComponentToLoad] = useState<string>("Home");

  const [list, setList] = useState<ListItem[]>(initialList);

  const {
    processTransactionValue,
    confirmationDialogBoxOpen,
    confirmationDialogBoxType,
    deleteRecord,
    setConfirmationDialogBoxContinue,
    setProcessTransactionValue
  } = useDialogBoxConfirmation();

  type ProcessTransaction = (listItem: ListItem, index: number) => void;
  const processTransaction: ProcessTransaction = (listItem, index) => {
    // eslint-disable-next-line no-console
    console.log("listItem", listItem);
    // eslint-disable-next-line no-console
    console.log("index", index);
  };

  const {
    dragAndDrop,
    handleDragStart,
    handleDragOver,
    handleDrop,
    onDragLeave,
    handleManualMove
  } = useDragAndDropSort<ListItem>({ updateArray: setList, callback: processTransaction });

  const navigationItems = [
    {
      name: "Home",
      componentName: "Home",
      onClick: () => {
        window.scrollTo(0, 0);
        setComponentToLoad("Home");
      }
    },
    {
      name: "Page 1",
      type: "dropdown",
      isPresent: true,
      dropdownItems: [
        {
          name: "Dropdown 1",
          componentName: "Dropdown1",
          onClick: () => {
            window.scrollTo(0, 0);
            setComponentToLoad("Dropdown1");
          }
        },
        {
          name: "Dropdown Item 2",
          componentName: "Dropdown2",
          onClick: () => {
            window.scrollTo(0, 0);
            setComponentToLoad("Dropdown2");
          }
        }
      ]
    },
    {
      name: "Page 2",
      componentName: "Page2",
      onClick: () => {
        window.scrollTo(0, 0);
        setComponentToLoad("Page2");
      }
    },
    {
      name: "Another Nav Link",
      componentName: "Page3",
      onClick: () => {
        window.scrollTo(0, 0);
        setComponentToLoad("Page3");
      }
    }
  ];

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log("Form submitted!");
  };

  const handleEnterKey = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.shiftKey === false) {
      event.preventDefault();

      handleSubmit(event as unknown as SubmitEvent<HTMLFormElement>);
    }
  };

  // * Used for passing on the transaction value from the delete hook. -- 10/16/2023 JH
  useEffect(() => {
    if (processTransactionValue) {
      setProcessTransactionValue("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processTransactionValue]);

  return (
    <div>
      <DialogBoxConfirmation
        dialogBoxOpen={confirmationDialogBoxOpen}
        dialogBoxType={confirmationDialogBoxType}
        setDialogBoxContinue={setConfirmationDialogBoxContinue}
      />

      <Header applicationName="Shared Components" />

      <Navigation navigationItems={navigationItems} componentToLoad={componentToLoad} />

      <main>
        <section className="section-block mb-4">
          <NoResultsText>No sessions available.</NoResultsText>
        </section>

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
          <SortableList
            list={list}
            titleField="listItemName"
            subtitleField="listItemSubtitle"
            dragAndDrop={dragAndDrop}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            onDragLeave={onDragLeave}
            handleManualMove={handleManualMove}
          />
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="button" className="btn btn-dark-gray">
                Reset
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  deleteRecord();
                }}
              >
                Delete
              </button>
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

export default App;
