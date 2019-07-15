import React from "react";
import axios from "axios";

class SingleArticle extends React.Component {
  state = {
    singleArticle: {}
  };
  render() {
    return (
      <React.Fragment>
        <h3>{this.state.singleArticle.title}</h3>
        <p>{this.state.singleArticle.body}</p>
        <p>Author~~{this.state.singleArticle.author}</p>
        <p>Date Added~~{this.state.singleArticle.created_at}</p>
        <p>Votes~~{this.state.singleArticle.votes}</p>
        <p>Comments~~{this.state.singleArticle.comment_count}</p>
      </React.Fragment>
    );
  }

  fetchAnArticle = () => {
    console.log(this.props);
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
