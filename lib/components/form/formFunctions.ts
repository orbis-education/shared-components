import { parse } from "shared-functions";
import { OptionText } from "@/types/FormTypes";

export const createOptionDisplayText = (optionDataItem: any, optionTextItem: OptionText) => {
  let displayOptionText: string = "";

  if (optionTextItem.type === "property") {
    displayOptionText = optionDataItem[optionTextItem.text];
  } else if (optionTextItem.type === "string") {
    displayOptionText = parse(optionTextItem.text);
  }

  return displayOptionText;
};
