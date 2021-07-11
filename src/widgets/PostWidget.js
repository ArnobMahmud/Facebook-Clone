import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
export default function PostWidget({
  profilePic,
  image,
  userName,
  timeStamp,
  message,
}) {
  return (
    <PostSection>
      <div className="post">
        <div className="post_top">
          <Avatar src={profilePic} className="post_avatar" />
          <div className="post_top_info">
            <h5>{userName}</h5>
            {/* <p>{new Date(timeStamp?.toDate()).toUTCString()}</p> */}
            <p>34m</p>
          </div>
        </div>
        <div className="post_bottom">
          <p>{message}</p>
          <div className="post_image">
            <img src={image} alt="post" />
          </div>
        </div>
        <div className="post_option">
          <div className="post_reactions">
            <ThumbUp />
            <p>Like</p>
          </div>
          <div className="post_reactions">
            <ChatBubbleOutline />
            <p>Comment</p>
          </div>
          <div className="post_reactions">
            <NearMe />
            <p>Share</p>
          </div>
          <div className="post_reactions">
            <AccountCircle />
            <ExpandMoreOutlined />
          </div>
        </div>
      </div>
    </PostSection>
  );
}

const PostSection = styled.div`
  box-shadow: 0 5px 5px -7px rgba(0, 0, 0, 0.75);
  .post {
    margin: 20px 0px;
    padding: 20px 30px 5px;
    background-color: white;
    border-radius: 15px;
  }
  .post_top {
    display: flex;
    padding: 10px 0px;
  }
  .post_avatar {
    margin-right: 20px;
  }
  .post_top_info h5 {
    margin: 0;
  }
  .post_image > img {
    border-radius: 10px;
    margin-top: 10px;
    max-width: 100%;
    height: auto;
  }
  .post_option {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .post_reactions p {
    color: blueGrey;
  }
  .post_reactions{
    color: grey;
    vertical-align: middle;
    align-items: center;
  }
`;
