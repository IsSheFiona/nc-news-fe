import React from "react";
import { Link } from "@reach/router";
import styles from "./Articles.module.css";

function ArticleList(props) {
  return (
    <>
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
              <p>The Droid You Are Looking For Is{":  " + article.author}</p>{" "}
              <p>Date AI-dded{":  " + article.created_at}</p>{" "}
              <p>Human interactions{":  " + article.comment_count}</p>{" "}
              <p>Human approval level{":  " + article.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ArticleList;
