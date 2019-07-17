import React from "react";
import { Link } from "@reach/router";

function ArticleList(props) {
  return (
    <React.Fragment>
      <ul>
        {props.articles.map(article => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h3>{article.title}</h3>
              </Link>
              <Link to={`/topics/${article.topic}`}>
                <h4>Topic{":  " + article.topic}</h4>
              </Link>
              <p>The Droid You Are Looking For{":  " + article.author}</p>{" "}
              <p>Date Added{":  " + article.created_at}</p>{" "}
              <p>Comments{":  " + article.comment_count}</p>{" "}
              <p>Votes{":  " + article.votes}</p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default ArticleList;
