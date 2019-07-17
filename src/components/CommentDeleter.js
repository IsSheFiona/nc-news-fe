import React from "react";

function CommentDeleter(props) {
  if (props.loggedInUser === props.comment.author)
    return (
      <>
        <button
          className="deleteButton"
          onClick={() => props.deleteComment(props.comment)}
        >
          Destroy Your Comment!
        </button>
      </>
    );
  else return null;
}

export default CommentDeleter;
