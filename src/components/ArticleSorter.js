import React from "react";

function ArticleSorter(props) {
  return (
    <form
      className="articleSorter"
      onChange={e => props.fetchArticles({ sort_by: e.target.value })}
    >
      <label>
        Sort Articles By:{" "}
        <select>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
    </form>
  );
}

export default ArticleSorter;
