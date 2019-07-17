import React from "react";
import axios from "axios";
import CommentAdder from "./CommentAdder";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";

class Comments extends React.Component {
  state = {
    comments: []
  };
  render(props) {
    console.log(props);
    return (
      <>
        <CommentAdder
          loggedInUser={this.props.loggedInUser}
          postAComment={this.postAComment}
        />
        <ul>
          {this.state.comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <h3>{comment.body}</h3>
                <p>
                  The Droid You Are Looking For{":  " + comment.author}
                </p>{" "}
                <p>Date Added{":  " + comment.created_at}</p>{" "}
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
    const url = `https://fionas-nc-news.herokuapp.com/api/articles/${
      this.props.article_id
    }/comments`;

    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          comments: data.comments
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  postAComment = ({ body, loggedInUser }) => {
    const url = `https://fionas-nc-news.herokuapp.com/api/articles/${
      this.props.article_id
    }/comments`;
    axios
      .post(url, { body, username: loggedInUser })
      .then(response => {
        this.setState(prevState => {
          return { comments: [response.data.comment, ...prevState.comments] };
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  deleteComment = comment => {
    const url = `https://fionas-nc-news.herokuapp.com/api/comments/${
      comment.comment_id
    }`;
    let commentId = comment.comment_id;
    axios
      .delete(url)
      .then(
        this.setState({
          comments: this.state.comments.filter(comment => {
            return comment.comment_id !== commentId;
          })
        })
      )
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }
}

export default Comments;
