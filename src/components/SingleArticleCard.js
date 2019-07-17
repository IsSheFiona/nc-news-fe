import React from "react";
import Voter from "./Voter";

function SingleArticleCard(props) {
  return (
    <>
      <div className="singleArticle">
        <h3>{props.singleArticle.title}</h3>
        <p>{props.singleArticle.body}</p>
        <p>Author{":  " + props.singleArticle.author}</p>
        <p>Date Added{":  " + props.singleArticle.created_at}</p>
        <Voter
          votes={props.singleArticle.votes}
          id={props.singleArticle.article_id}
          type="articles"
        />
        <p>Comments{":  " + props.singleArticle.comment_count}</p>
      </div>
    </>
  );
}

export default SingleArticleCard;
