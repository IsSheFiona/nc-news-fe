import React from "react";

class CommentAdder extends React.Component {
  state = {
    body: ""
  };
  render(props) {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="addCommentForm">
          <input
            type="text"
            id="body"
            value={this.state.body}
            onChange={e => this.handleChange(e.target.value, "body")}
            className="addCommentInput"
          />
          <button className="addCommentButton">
            Add Your Comment Puny Human
          </button>
        </form>
      </>
    );
  }
  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { body } = this.state;
    const { postAComment, loggedInUser } = this.props;
    postAComment({ body, loggedInUser });
    this.setState({ body: "" });
  };
}

export default CommentAdder;
