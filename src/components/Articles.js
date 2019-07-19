import React from "react";
import ArticleSorter from "./ArticleSorter";
import ErrorHandler from "./ErrorHandler";
import LoadingPage from "./LoadingPage";
import ArticleList from "./ArticleList";
import PageTurner from "./PageTurner";
import { getArticles } from "../api";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    p: 1,
    articleCount: 0
  };
  render() {
    if (this.state.err) {
      return (
        <ErrorHandler
          msg={this.state.err.response.data.msg}
          status={this.state.err.response.status}
        />
      );
    }
    if (this.state.isLoading) return <LoadingPage />;
    return (
      <>
        <ArticleSorter fetchArticles={this.fetchArticles} />
        <ArticleList articles={this.state.articles} />
        <PageTurner
          fetchArticles={this.fetchArticles}
          p={this.state.p}
          articleCount={this.state.articleCount}
        />
      </>
    );
  }

  fetchArticles = ({ topic, sort_by, order, p = 1 }) => {
    getArticles(topic, sort_by, order, (p = 1))
      .then(({ data }) => {
        this.setState({
          articles: data.articles,
          isLoading: false,
          err: null,
          p: p,
          articleCount: data.articleCount[0].count
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
