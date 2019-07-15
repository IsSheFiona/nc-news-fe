import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Articles from "./components/Articles";
//import "./App.css";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Articles path="/home" />
        <Articles path="topics/:topic" />
        <SingleArticle path="/articles/:article_id" />
        <Comments path="/articles/:article_id/comments" />
      </Router>
    </React.Fragment>
  );
}

export default App;
