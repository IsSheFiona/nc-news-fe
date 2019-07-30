import axios from "axios";

${ url } /articles

const url = "https://fionas-nc-news.herokuapp.com/api"

export function getArticles(topic, sort_by, order, p = 1) {
  return axios.get(`${url}/articles`, {
    params: { topic: topic, sort_by: sort_by, order: order, p: p }
  });
}

export function getComments(article_id) {
  return axios.get(`${url}/articles/${article_id}/comments`);
}

export function addComment(body, loggedInUser, article_id) {
  return axios.post(`${url}/articles/${article_id}/comments`, { body, username: loggedInUser });
}

export function removeComment(comment, comment_id) {
  return axios.delete(`${url}/comments/${comment_id}`);
}

export function getAnArticle(article_id) {
  return axios.get(`${url}/articles/${article_id}`);
}

export function vote(value, type, id) {
  return axios.patch(`${url}${type}/${id}`, { inc_votes: value });
}
