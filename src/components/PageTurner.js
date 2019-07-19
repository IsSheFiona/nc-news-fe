import React from "react";

class PageTurner extends React.Component {
  render(props) {
    return (
      <div className="pageTurner">
        {this.disablePrevious() || (
          <button
            type="button"
            onClick={e => this.props.fetchArticles({ p: this.props.p - 1 })}
          >
            Previous Page
          </button>
        )}
        {this.disableNext() || (
          <button
            type="button"
            onClick={e => this.props.fetchArticles({ p: this.props.p + 1 })}
          >
            Next Page
          </button>
        )}
      </div>
    );
  }
  disableNext = () => {
    const { articleCount, p } = this.props;
    if (articleCount > p * 10) {
      return false;
    } else return true;
  };

  disablePrevious = () => {
    if (this.props.p === 1) {
      return true;
    } else return false;
  };
}

export default PageTurner;
