import React from "react";

function PageTurner(props) {
  return (
    <div className="pageTurner">
      <button
        type="button"
        onClick={e => props.fetchArticles({ p: props.p - 1 })}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={e => props.fetchArticles({ p: props.p + 1 })}
      >
        Next Page
      </button>
    </div>
  );
}

export default PageTurner;
