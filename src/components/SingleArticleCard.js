import React from "react";
import { Link } from "@reach/router";
import Comments from "./Comments";

function SingleArticleCard(props) {
  return (
    <React.Fragment>
      <h3>{props.singleArticle.title}</h3>
      <p>{props.singleArticle.body}</p>
      <p>Author{":  " + props.singleArticle.author}</p>
      <p>Date Added{":  " + props.singleArticle.created_at}</p>
      <p>Votes{":  " + props.singleArticle.votes}</p>
      <Link to={`/articles/${props.singleArticle.article_id}/comments`}>
        <p>Comments{":  " + props.singleArticle.comment_count}</p>
        <Comments article_id={props.article_id} />
      </Link>
    </React.Fragment>
  );
}

export default SingleArticleCard;
