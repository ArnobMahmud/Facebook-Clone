import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

export default function MessageSender() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <MessageSenderSection>
        <div className="message-sender-up">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I7lvQ9Jg2YIyQ2gPaS3_Dn41a1FjeEDNUmPNO10ZQ=s83-c-mo" />
          <form>
            <input
              className="messageSender_input"
              placeholder="What's on your mind?"
            />
            {/* <input placeholder="Image URL" className="messageSender_input" /> */}
            {/* <button onClick={handleSubmit} type="submit">
              Hidden Submit
            </button> */}
          </form>
        </div>
        <div className="message-sender-down">
          <div className="message-option">
            <Videocam style={{ color: "red" }} />
            <h6>Live Video</h6>
          </div>{" "}
          <div className="message-option">
            <PhotoLibrary style={{ color: "green" }} />
            <h6>Photo/Video</h6>
          </div>
          <div className="message-option">
            <InsertEmoticon style={{ color: "orange" }} />
            <h6>Activity/Feeling</h6>
          </div>
        </div>
      </MessageSenderSection>
    </>
  );
}

const MessageSenderSection = styled.div`
  box-shadow: 0 5px 5px -7px rgba(0, 0, 0, 0.75);
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  /* width: 100%; */
  .message-sender-up {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #eff2f5;
    padding: 15px 0px;
    padding-left: 15px;
  }
  .message-sender-up > form > button {
    display: none;
  }
  .messageSender_input {
    background: #ddd;
    border: none;
    outline: none;
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 30px;
    width: 300%;
  }
  .message-sender-down {
    justify-content: space-around;
    display: flex;
    padding: 20px 15px;
  }
  .message-sender-down h6 {
    margin-left: 10px;
  }
  .message-option {
    display: flex;
  }
`;
