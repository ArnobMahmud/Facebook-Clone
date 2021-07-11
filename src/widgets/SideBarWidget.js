import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
export default function SideBarWidget({ src, Icon, title }) {
  return (
    <>
      <SideBarWidgetBody>
        <div className="sidebarRow">
          {src && <Avatar src={src} />}
          {Icon && <Icon />}
          <h6> {title}</h6>
        </div>
      </SideBarWidgetBody>
    </>
  );
}

const SideBarWidgetBody = styled.div`
  .sidebarRow {
    padding: 15px 30px;
    display: flex;
    line-height: 2;
    align-items: center;
  }
  h6 {
    margin-left: 20px;
    font-weight: 600;
  }
  .MuiSvgIcon-root {
    color: #2e81f4;
    font-size: xx-large;
  }
  .sidebarRow:hover {
    background: lightgray;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    .sidebarRow {
      display: none;
    }
  }
`;
