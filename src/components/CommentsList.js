import React from "react";
//import styles from "./Comments.module.css";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";

function CommentsList(props) {
  return (
    <>
      <ul>
        {props.comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.body}</h3>
              <p>
                The Droid You Are Looking For Is{":  " + comment.author}
              </p>{" "}
              <p>Date AI-dded{":  " + comment.created_at}</p>{" "}
              <CommentDeleter
                comment={comment}
                deleteComment={props.deleteComment}
                loggedInUser={props.loggedInUser}
              />
              <Voter
                votes={comment.votes}
                id={comment.comment_id}
                type="comments"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CommentsList;
