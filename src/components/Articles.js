import React from "react";
import axios from "axios";
import ArticleSorter from "./ArticleSorter";
import ErrorHandler from "./ErrorHandler";
import LoadingPage from "./LoadingPage";
import ArticleList from "./ArticleList";

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
        <ArticleList articles={this.state.articles} />
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
          isLoading: false,
          err: null
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
