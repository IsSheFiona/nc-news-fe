import React from "react";
import Voter from "./Voter";
import styles from "./SingleArticle.module.css";

function SingleArticleCard(props) {
  const {
    title,
    body,
    author,
    created_at,
    votes,
    article_id,
    comment_count
  } = props.singleArticle;
  return (
    <>
      <div className={styles.singleArticle}>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>The Droid You Are Looking For Is{":  " + author}</p>
        <p>Date AI-dded{":  " + created_at}</p>
        <Voter votes={votes} id={article_id} type="articles" />
        <p>Human interactions{":  " + comment_count}</p>
      </div>
    </>
  );
}

export default SingleArticleCard;
