type NoResultsTextProps = {
  children: string;
};

const NoResultsText = ({ children = "No search results." }: NoResultsTextProps) =>
  <span className="text-center no-results-message"><i className="fa fa-exclamation-triangle red-text"></i> {children}</span>;

export default NoResultsText;