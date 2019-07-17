import React from "react";

function ArticleSorter(props) {
  return (
    <div className="articleSorter">
      <form onChange={e => props.fetchArticles({ sort_by: e.target.value })}>
        <label>
          Sort Articles By:{" "}
          <select>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
      </form>
      <form onChange={e => props.fetchArticles({ order: e.target.value })}>
        <label>
          Order:{" "}
          <select>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default ArticleSorter;
