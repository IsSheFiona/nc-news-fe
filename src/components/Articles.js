import React from "react";
import axios from "axios";

class Articles extends React.Component {
  state = {
    articles: []
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.articles.map(article => {
            return (
              <li>
                <h3>{article.title}</h3> <h4>Topic ~~{article.topic}</h4>{" "}
                <p>Author ~~{article.author}</p>{" "}
                <p>Date Created ~~{article.created_at}</p>{" "}
                <p>Comments ~~{article.comment_count}</p>{" "}
                <p>Votes ~~{article.votes}</p>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

  fetchArticles = () => {
    const url = "https://fionas-nc-news.herokuapp.com/api/articles";
    axios
      .get(url)
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
    this.fetchArticles();
  }
}

export default Articles;
