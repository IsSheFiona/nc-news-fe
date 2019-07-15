import React from "react";
import axios from "axios";

class Comments extends React.Component {
  state = {
    comments: []
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <h3>{comment.body}</h3>
                <p>Author{":  " + comment.author}</p>{" "}
                <p>Date Added{":  " + comment.created_at}</p>{" "}
                <p>Votes{":  " + comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
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
  componentDidMount() {
    this.fetchComments();
  }
}

export default Comments;
