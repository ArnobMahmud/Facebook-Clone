import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ContactWidget =
   ({ src, title, Icon }) => {
  return (
    <>
      <ContactWidgetBody>
        <div className="contact">
          {src && <Avatar src={src} />}
          {Icon && <Icon />}
          <h5> {title}</h5>
        </div>
      </ContactWidgetBody>
    </>
  );
  };

export default ContactWidget;

const ContactWidgetBody = styled.div`
  .contact {
    text-align: right;
    padding: 10px;

    display: flex;
    line-height: 2;
    align-items: center;
  }
  .contact h5 {
    margin-left: 10px;
    font-size: 14px !important;
  }
  @media (max-width: 600px) {
    .sidebarRow {
      display: none;
    }
  }
`;
