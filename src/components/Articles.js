import React from "react";
import axios from "axios";
import ArticleSorter from "./ArticleSorter";
import ErrorHandler from "./ErrorHandler";
import LoadingPage from "./LoadingPage";
import ArticleList from "./ArticleList";
import PageTurner from "./PageTurner";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    p: 1
  };
  render() {
    if (this.state.err) {
      return <ErrorHandler err={this.state.err} />;
    }
    if (this.state.isLoading) return <LoadingPage />;
    return (
      <>
        <ArticleSorter fetchArticles={this.fetchArticles} />
        <ArticleList articles={this.state.articles} />
        <PageTurner fetchArticles={this.fetchArticles} p={this.state.p} />
      </>
    );
  }

  fetchArticles = ({ topic, sort_by, order, p }) => {
    const url = "https://fionas-nc-news.herokuapp.com/api/articles";
    axios
      .get(url, {
        params: { topic: topic, sort_by: sort_by, order: order, p: p }
      })
      .then(({ data }) => {
        this.setState({
          articles: data.articles,
          isLoading: false,
          err: null,
          p: p + 1
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
    if (this.state.p !== 1) {
      this.fetchArticles({ p: this.state.p });
    } else this.fetchArticles({});
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchArticles({ topic: this.props.topic });
    }
  };
}

export default Articles;
