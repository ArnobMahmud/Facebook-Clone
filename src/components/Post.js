import React, { Component } from "react";
import PostWidget from "../widgets/PostWidget";

export default class Post extends Component {
  render() {
    return (
      <div>
        {" "}
        <PostWidget
          key=""
          profilePic="https://images.unsplash.com/photo-1515077678510-ce3bdf418862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=675&q=80"
          message="Lorem ipsum dolor sit amet"
          image="https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          userName="Elizabeth Wong"
        />
        <PostWidget
          key=""
          profilePic="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          message="Lorem ipsum dolor siet amet!"
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          userName="Carolyn Duncan"
        />
        <PostWidget
          key=""
          profilePic="https://images.unsplash.com/photo-1519631128182-433895475ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          message="Lorem ipsum dolor siet amet!"
          image=" https://images.unsplash.com/reserve/OlxPGKgRUaX0E1hg3b3X_Dumbo.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'"
          userName="Paul Pinnoc"
        />
        {/* <PostWidget
          key=""
          profilePic=""
          message="Let's Clone Facebook!"
          image="https://avatars.githubusercontent.com/u/60808266?v=4"
          userName="Arnob Mahmud"
        />{" "} */}
      </div>
    );
  }
}
