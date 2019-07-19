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
    if (this.state.err) {
      console.log(this.state.err);
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
        <SingleArticleCard singleArticle={this.state.singleArticle} />
        <Comments
          article_id={this.state.singleArticle.article_id}
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
