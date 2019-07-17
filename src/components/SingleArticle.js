import React from "react";
import axios from "axios";
import ErrorHandler from "./ErrorHandler";
import LoadingPage from "./LoadingPage";
import SingleArticleCard from "./SingleArticleCard";
import Comments from "./Comments";

class SingleArticle extends React.Component {
  state = {
    singleArticle: {},
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
        <SingleArticleCard singleArticle={this.state.singleArticle} />
        <Comments article_id={this.state.singleArticle.article_id} />
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
          singleArticle: data.article,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchAnArticle();
  }
}

export default SingleArticle;
