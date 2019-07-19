import React from "react";
import CommentAdder from "./CommentAdder";

import LoadingPage from "./LoadingPage";
import { getComments, addComment, removeComment } from "../api";
import CommentsList from "./CommentsList";

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
        <CommentsList
          comments={comments}
          loggedInUser={this.props.loggedInUser}
          deleteComment={this.deleteComment}
        />
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
