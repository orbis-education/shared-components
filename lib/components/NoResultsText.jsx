
const NoResultsText = ({ children = "No search results." }) =>
  <div className="card-container">
    <p className="text-center no-results-message"><i className="fa fa-exclamation-triangle red-text"></i> {children}</p>
  </div>;

export default NoResultsText;