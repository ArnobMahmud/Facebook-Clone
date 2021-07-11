import React from "react";
import Story from "./Story";
import styled from "styled-components";
import MessageSender from "./CreatePost";
import Post from "./Post";
export default function Feed() {
  return (
    <FeedSection>
      <div className="feed">
        <Story />
        <MessageSender />
        <Post />
      </div>
    </FeedSection>
  );
}

const FeedSection = styled.div`
  flex: 0;
  padding: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    padding: 30px;
  }
`;
