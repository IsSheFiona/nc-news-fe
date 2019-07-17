import React from "react";

function SingleArticleCard(props) {
  return (
    <React.Fragment>
      <h3>{props.singleArticle.title}</h3>
      <p>{props.singleArticle.body}</p>
      <p>Author{":  " + props.singleArticle.author}</p>
      <p>Date Added{":  " + props.singleArticle.created_at}</p>
      <p>Votes{":  " + props.singleArticle.votes}</p>
      <p>Comments{":  " + props.singleArticle.comment_count}</p>
    </React.Fragment>
  );
}

export default SingleArticleCard;
