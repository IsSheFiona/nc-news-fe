import React from "react";

function ArticleSorter() {
  return (
    <form className="articleSorter" onChange={() => {}}>
      <label>
        Sort Articles By:{" "}
        <select>
          <option>Date</option>
          <option>Comment Count</option>
          <option>Votes</option>
        </select>
      </label>
    </form>
  );
}

export default ArticleSorter;
