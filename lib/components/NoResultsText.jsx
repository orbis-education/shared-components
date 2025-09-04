
const NoResultsText = ({ children = "No search results." }) =>
  <span className="text-center no-results-message"><i className="fa fa-exclamation-triangle red-text"></i> {children}</span>;

export default NoResultsText;