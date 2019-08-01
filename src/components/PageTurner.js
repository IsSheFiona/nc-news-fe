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
    return !(articleCount > p * 10);
  };

  disablePrevious = () => {
    return this.props.p === 1;
  };
}

export default PageTurner;
