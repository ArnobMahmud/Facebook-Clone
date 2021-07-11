import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ContactWidget = ({ info, src, Icon }) => {
  return (
    <>
      <ContactWidgetBody>
        <div className="contact">
          {src && <Avatar src={src} />}
          {Icon && <Icon />}
          <h5> {info}</h5>
        </div>
      </ContactWidgetBody>
    </>
  );
};

export default ContactWidget;

const ContactWidgetBody = styled.div`
  .contact {
    text-align: center;
    padding: 10px;
    display: flex;
    line-height: 2;
    align-items: center;
    margin-left: 50px;
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
