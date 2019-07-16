import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import ArticleSorter from "./ArticleSorter";
import ErrorHandler from "./ErrorHandler";
import LoadingPage from "./LoadingPage";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };
  render() {
    if (this.state.err) {
      return <ErrorHandler err={this.state.err} />;
    }
    if (this.state.isLoading) return <LoadingPage />;
    return (
      <React.Fragment>
        <ArticleSorter fetchArticles={this.fetchArticles} />
        <ul>
          {this.state.articles.map(article => {
            return (
              <li key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <Link to={`/topics/${article.topic}`}>
                  <h4>Topic{":  " + article.topic}</h4>
                </Link>
                <p>Author{":  " + article.author}</p>{" "}
                <p>Date Added{":  " + article.created_at}</p>{" "}
                <p>Comments{":  " + article.comment_count}</p>{" "}
                <p>Votes{":  " + article.votes}</p>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

  fetchArticles = ({ topic, sort_by }) => {
    const url = "https://fionas-nc-news.herokuapp.com/api/articles";
    axios
      .get(url, { params: { topic: topic, sort_by: sort_by } })
      .then(({ data }) => {
        this.setState({
          articles: data.articles,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  componentDidMount() {
    if (this.props.topic) {
      this.fetchArticles({ topic: this.props.topic });
    } else this.fetchArticles({});
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchArticles({ topic: this.props.topic });
    }
  };
}

export default Articles;
