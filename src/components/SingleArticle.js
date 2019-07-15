import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Comments from "./Comments";

class SingleArticle extends React.Component {
  state = {
    singleArticle: {}
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <h3>{this.state.singleArticle.title}</h3>
        <p>{this.state.singleArticle.body}</p>
        <p>Author{":  " + this.state.singleArticle.author}</p>
        <p>Date Added{":  " + this.state.singleArticle.created_at}</p>
        <p>Votes{":  " + this.state.singleArticle.votes}</p>
        <Link to={`/articles/${this.state.singleArticle.article_id}/comments`}>
          <p>Comments{":  " + this.state.singleArticle.comment_count}</p>
          <Comments article_id={this.state.article_id} />
        </Link>
      </React.Fragment>
    );
  }

  fetchAnArticle = () => {
    const url = `https://fionas-nc-news.herokuapp.com/api/articles/${
      this.props.article_id
    }`;
    axios
      .get(url)
      .then(({ data }) => {
        this.setState({
          singleArticle: data.article
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchAnArticle();
  }
}

export default SingleArticle;
