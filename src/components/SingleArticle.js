import React from "react";
import ErrorHandler from "./ErrorHandler";
import LoadingPage from "./LoadingPage";
import SingleArticleCard from "./SingleArticleCard";
import Comments from "./Comments";
import { getAnArticle } from "../api";

class SingleArticle extends React.Component {
  state = {
    singleArticle: {},
    isLoading: true,
    err: null
  };
  render() {
    const { err, isLoading, singleArticle } = this.state;
    if (err) {
      return (
        <ErrorHandler
          msg={err.response.data.msg}
          status={err.response.status}
        />
      );
    }
    if (isLoading) return <LoadingPage />;
    return (
      <>
        <SingleArticleCard singleArticle={singleArticle} />
        <Comments
          article_id={singleArticle.article_id}
          loggedInUser={this.props.loggedInUser}
        />
      </>
    );
  }

  fetchAnArticle = () => {
    getAnArticle(this.props.article_id)
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
