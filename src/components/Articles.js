import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

class Articles extends React.Component {
  state = {
    articles: []
  };
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
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

  fetchArticles = topic => {
    const url = "https://fionas-nc-news.herokuapp.com/api/articles";
    axios
      .get(url, { params: { topic: topic } })
      .then(({ data }) => {
        this.setState({
          articles: data.articles
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    if (this.props.topic) {
      this.fetchArticles(this.props.topic);
    } else this.fetchArticles();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps !== this.props) {
      this.fetchArticles(this.props.topic);
    }
  };
}

export default Articles;
