import React from "react";
import CommentAdder from "./CommentAdder";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";
import LoadingPage from "./LoadingPage";
import { getComments, addComment, removeComment } from "../api";

class Comments extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };
  render(props) {
    const { comments, isLoading } = this.state;
    if (isLoading) return <LoadingPage />;
    return (
      <>
        <CommentAdder
          loggedInUser={this.props.loggedInUser}
          postAComment={this.postAComment}
        />
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <h3>{comment.body}</h3>
                <p>
                  The Droid You Are Looking For Is{":  " + comment.author}
                </p>{" "}
                <p>Date AI-dded{":  " + comment.created_at}</p>{" "}
                <CommentDeleter
                  comment={comment}
                  deleteComment={this.deleteComment}
                  loggedInUser={this.props.loggedInUser}
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

  fetchComments = () => {
    getComments(this.props.article_id)
      .then(({ data }) => {
        this.setState({
          comments: data.comments,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  postAComment = ({ body, loggedInUser }) => {
    addComment(body, loggedInUser, this.props.article_id)
      .then(response => {
        this.setState(prevState => {
          return { comments: [response.data.comment, ...prevState.comments] };
        });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  deleteComment = comment => {
    let commentId = comment.comment_id;
    removeComment(comment, comment.comment_id)
      .then(
        this.setState({
          comments: this.state.comments.filter(comment => {
            return comment.comment_id !== commentId;
          })
        })
      )
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }
}

export default Comments;
