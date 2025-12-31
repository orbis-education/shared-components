import { useState } from "react";
import classnames from "classnames";
import { isEmpty } from "shared-functions";

const CopyLink = ({
  urlToCopy,
  labelText = "Copy URL",
  inputDisabled,
  buttonType = "default",
  tooltipStyle = ""
}) => {

  const [copiedSuccessfully, setCopiedSuccessfully] = useState(false);

  const buttonClasses = classnames("btn", {
    "btn-success": copiedSuccessfully,
    "btn-light-gray": !copiedSuccessfully
  });

  const tooltipClasses = classnames("btn btn-transparent tooltip-container", {
    "tooltip-right": tooltipStyle === "right",
    "tooltip-left": tooltipStyle === "left",
    "tooltip-down": tooltipStyle === "down"
  });


  const copyLinkToClipboard = (event) => {

    event.stopPropagation();

    if (!isEmpty(urlToCopy)) {

      navigator.clipboard.writeText(urlToCopy);

      setCopiedSuccessfully(true);

      setTimeout(() => {

        setCopiedSuccessfully(false);

      }, 2000);

    };

  };


  return (
    <>

      {buttonType === "icon" ?

        <button
          type="button"
          className={tooltipClasses}
          data-tooltip={copiedSuccessfully ? "Copied" : labelText}
          onClick={copyLinkToClipboard}
          disabled={inputDisabled}
        >
          {copiedSuccessfully ?
            <>
              <i className="fa fa-check green-text" />
              <span className="sr-only">Copied</span>
            </>
            :
            <>
              <i className="fa fa-copy" />
              <span className="sr-only">{labelText}</span>
            </>
          }
        </button>

        :

        <button
          type="button"
          className={buttonClasses}
          onClick={copyLinkToClipboard}
          disabled={inputDisabled}
        >
          {copiedSuccessfully === true ?
            <>
              <i className="fas fa-check"></i> Copied
            </>
            : labelText}
        </button>

      }

    </>
  );
};

export default CopyLink;