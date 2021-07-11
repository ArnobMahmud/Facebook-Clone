import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
export default function Header() {
  return (
    <>
      <HeaderSection>
        <div className="header_left">
          <a href="/">
            <img
              className="fb_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_(2019).svg/1200px-Facebook_f_logo_(2019).svg.png"
              alt="fb-logo"
            ></img>
          </a>
          <div className="search_section form-control">
            <SearchIcon className="search_icon" />
            <input type="text" placeholder="Search Here"></input>
          </div>
        </div>
        <div className="header_middle">
          <HomeIcon
            fontSize="large"
            color="#2e81f4"
            className="header_option active"
          />
          <SubscriptionsOutlinedIcon
            fontSize="large"
            className="header_option"
          />
          <FlagIcon fontSize="large" className="header_option" />
          <StorefrontOutlinedIcon fontSize="large" className="header_option" />
          <SupervisedUserCircleIcon
            fontSize="large"
            className="header_option"
          />
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I7lvQ9Jg2YIyQ2gPaS3_Dn41a1FjeEDNUmPNO10ZQ=s83-c-mo" />
            <h5>Arnob Mahmud</h5>
          </div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </HeaderSection>
    </>
  );
}

const HeaderSection = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  box-shadow: 1px 1px 7px 1px #8080804d;
  .header_left {
    display: flex;
  }
  .header_left img {
    max-width: 50px;
  }
  .search_section {
    background: #ddd;
    display: flex;
    padding: 0px 10px;
    align-items: center;
    border-radius: 50px;
    margin-left: 20px;
  }
  .search_section > input {
    background: #ddd;
    border: none;
    outline: none;
    margin-left: 10px;
    padding: 10px 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .search_icon {
    color: grey;
    margin-left: 5px;
  }
  .header_option {
    cursor: pointer;
    color: grey;
    margin: 0px 35px;
  }
  .header_option:hover {
    color: #2e81f4;
    background-color: #eff2f5;
  }
  .active {
    color: #2e81f4;
  }
  .header_right {
    display: flex;
  }
  .header_info {
    display: flex;
    align-items: center;
  }
  .header_info > h5 {
    margin-left: 10px;
    margin-right: 10px;
    color: #010101;
  }
  @media (max-width: 600px) {
    .search_section {
      display: none;
    }
    .header_right {
      display: none;
    }
    .header_option {
      margin: 0px 20px ;
    }
  }
`;
