import { useState, MouseEvent } from "react";
import classnames from "classnames";
import { isEmpty } from "shared-functions";

type CopyLinkProps = {
  urlToCopy: string;
  label: string;
  disabled: boolean;
  buttonType: string;
  tooltipStyle: string;
};

const CopyLink = ({
  urlToCopy,
  label = "Copy URL",
  disabled,
  buttonType = "default",
  tooltipStyle = ""
}: CopyLinkProps) => {
  const [copiedSuccessfully, setCopiedSuccessfully] = useState<boolean>(false);

  const buttonClasses: string = classnames("btn", {
    "btn-success": copiedSuccessfully,
    "btn-light-gray": !copiedSuccessfully
  });

  const tooltipClasses: string = classnames("btn btn-transparent tooltip-container", {
    "tooltip-right": tooltipStyle === "right",
    "tooltip-left": tooltipStyle === "left",
    "tooltip-down": tooltipStyle === "down"
  });

  const copyLinkToClipboard = (event: MouseEvent) => {
    event.stopPropagation();

    if (!isEmpty(urlToCopy)) {
      navigator.clipboard.writeText(urlToCopy);

      setCopiedSuccessfully(true);

      setTimeout(() => {
        setCopiedSuccessfully(false);
      }, 2000);
    }
  };

  return (
    <>
      {buttonType === "icon" ? (
        <button
          type="button"
          className={tooltipClasses}
          data-tooltip={copiedSuccessfully ? "Copied" : label}
          onClick={copyLinkToClipboard}
          disabled={disabled}
        >
          {copiedSuccessfully ? (
            <>
              <i className="fa fa-check green-text" />
              <span className="sr-only">Copied</span>
            </>
          ) : (
            <>
              <i className="fa fa-copy" />
              <span className="sr-only">{label}</span>
            </>
          )}
        </button>
      ) : (
        <button
          type="button"
          className={buttonClasses}
          onClick={copyLinkToClipboard}
          disabled={disabled}
        >
          {copiedSuccessfully ? (
            <>
              <i className="fas fa-check"></i> Copied
            </>
          ) : (
            label
          )}
        </button>
      )}
    </>
  );
};

export default CopyLink;
