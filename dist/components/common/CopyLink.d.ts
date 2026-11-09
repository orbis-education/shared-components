type CopyLinkProps = {
    urlToCopy: string;
    label: string;
    disabled: boolean;
    buttonType: string;
    tooltipStyle: string;
};
declare const CopyLink: ({ urlToCopy, label, disabled, buttonType, tooltipStyle }: CopyLinkProps) => import("react").JSX.Element;
export default CopyLink;
