import axios from "axios";

export function getArticles(topic, sort_by, order, p = 1) {
  const url = "https://fionas-nc-news.herokuapp.com/api/articles";
  return axios.get(url, {
    params: { topic: topic, sort_by: sort_by, order: order, p: p }
  });
}

export function getComments(article_id) {
  const url = `https://fionas-nc-news.herokuapp.com/api/articles/${article_id}/comments`;

  return axios.get(url);
}

export function addComment(body, loggedInUser, article_id) {
  const url = `https://fionas-nc-news.herokuapp.com/api/articles/${article_id}/comments`;
  return axios.post(url, { body, username: loggedInUser });
}

export function removeComment(comment, comment_id) {
  const url = `https://fionas-nc-news.herokuapp.com/api/comments/${comment_id}`;
  return axios.delete(url);
}

export function getAnArticle(article_id) {
  const url = `https://fionas-nc-news.herokuapp.com/api/articles/${article_id}`;
  return axios.get(url);
}

export function vote(value, type, id) {
  const url = `https://fionas-nc-news.herokuapp.com/api/${type}/${id}`;
  return axios.patch(url, { inc_votes: value });
}
