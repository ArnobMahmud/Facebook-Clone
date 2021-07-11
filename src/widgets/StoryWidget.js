import { Avatar } from "@material-ui/core";
import React from "react";

export default function StoryWidget({ image, profileSrc, title }) {
  return (
    <>
      <div style={{ backgroundImage: `url(${image})` }} className="story">
        <Avatar src={profileSrc} className="story_avatar" />
        <h4>{title}</h4>
      </div>
    </>
  );
}
