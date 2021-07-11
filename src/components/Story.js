import React from "react";
import StoryReelWidget from "../widgets/StoryWidget";
import styled from "styled-components";
export default function Story() {
  return (
    <StorySection>
      <div className="storyContainer">
        <StoryReelWidget
          image="https://avatars.githubusercontent.com/u/60808266?v=4"
          profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I7lvQ9Jg2YIyQ2gPaS3_Dn41a1FjeEDNUmPNO10ZQ=s83-c-mo"
          title="Arnob Mahmud"
        />{" "}
        <StoryReelWidget
          image="https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          profileSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          title="Carolyn Duncan"
        />{" "}
        <StoryReelWidget
          image="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
          profileSrc="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"
          title="Ed Morris"
        />{" "}
        <StoryReelWidget
          image="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          profileSrc="https://images.unsplash.com/photo-1519631128182-433895475ffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Paul Pinnoc"
        />{" "}
        <StoryReelWidget
          image="https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          profileSrc="https://images.unsplash.com/photo-1515077678510-ce3bdf418862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=675&q=80"
          title="Elizabeth Wong"
        />
        <StoryReelWidget
          image="https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          profileSrc="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=592&q=80"
          title="James Lathrop"
        />
      </div>
    </StorySection>
  );
}

const StorySection = styled.div`
  .storyContainer {
    display: flex;
  }
  .story {
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 200px;
    border-radius: 10px;
    margin-right: 15px;
    background-color: red;
    transition: transform 300ms ease-in;
    box-shadow: 0 5px 17px -7px rgba(0, 0, 0, 0.75);
  }
  .story:hover {
    transform: scale(1.09);
  }
  .story h4 {
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: white;
    font-size: 20px;
  }
  .story .story_avatar {
    position: absolute;
    top: 2px;
    left: 2px;
    border: 3px solid #2e81f4;
  }
  @media (max-width: 600px) {
    width: 600px;
    margin: 0px 30px;

  }
`;
