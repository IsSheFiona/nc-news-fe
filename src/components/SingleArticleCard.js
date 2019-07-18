import React from "react";
import Voter from "./Voter";
import styles from "./SingleArticle.module.css";

function SingleArticleCard(props) {
  return (
    <>
      <div className={styles.singleArticle}>
        <h3>{props.singleArticle.title}</h3>
        <p>{props.singleArticle.body}</p>
        <p>
          The Droid You Are Looking For Is{":  " + props.singleArticle.author}
        </p>
        <p>Date AI-dded{":  " + props.singleArticle.created_at}</p>
        <Voter
          votes={props.singleArticle.votes}
          id={props.singleArticle.article_id}
          type="articles"
        />
        <p>Human interactions{":  " + props.singleArticle.comment_count}</p>
      </div>
    </>
  );
}

export default SingleArticleCard;
