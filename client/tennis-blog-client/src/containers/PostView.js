import React from "react";
import { Link } from "react-router-dom";

class PostView extends React.Component {
  state = {
    title: "",
    content: "",
    score: 0,
    id: Number(
      this.props.location.pathname.substring(
        1,
        this.props.location.pathname.length,
      ),
    ),
    loaded: false,
  };
  componentDidMount() {
    console.log("PROPS", this.props);
    const post = this.props.posts.filter(post => post.id === this.state.id)[0];
    this.setState({
      title: post.title,
      content: post.content,
      score: post.score,
      loaded: true,
    });
  }
  render() {
    const cardStyle = {
      border: "1px solid black",
      height: "500px",
      width: "500px",
      display: "flex",
      flexDirection: "column",
      background: "white",
    };

    const cardContainerStyle = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "1rem",
    };

    const buttonsDivStyle = {
      display: "flex",
      flexDirection: "row",
      marginTop: "1rem",
    };

    return (
      <div className="cardContainer" style={cardContainerStyle}>
        <header className="header">
          <h1 className="title">Individual Post</h1>
        </header>
        {this.props.isFetching ? (
          <h1>Loading...</h1>
        ) : (
          <div style={cardStyle}>
            <div>
              <h1>Title: {this.state.title}</h1>
              <h2>Content: {this.state.content}</h2>
              <h3>Score: {this.state.score}</h3>
            </div>
          </div>
        )}
        <div className="singlePostButtonsDiv" style={buttonsDivStyle}>
          <Link to="/">
            <button>Home</button>
          </Link>
          <button onClick={() => this.props.deletePost(this.state.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default PostView;
