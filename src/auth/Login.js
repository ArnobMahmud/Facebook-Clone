import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
export default function Login() {
  const signIn = () => {};
  return (
    <>
      <LoginPage>
        <div className="login">
          <img
            src="https://th.bing.com/th/id/OIP.LFI4JJ0jsbkLTDoc8b3g-wHaHa?pid=ImgDet&rs=1"
            alt="logo"
          />
          <img
            src="https://th.bing.com/th/id/R.8e1e25f0151e2c319edb2aa01690e425?rik=3cw5V3mRdqONtg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f11%2fFacebook-Logo-Meaning.jpg&ehk=FgCeZkf1OpID4t2mYFq2yRNkztI%2bRdJPC4oKPmv7KeY%3d&risl=&pid=ImgRaw"
            alt="logo"
          />
          <Button type="submit" onClick={signIn}>
            Sign In
          </Button>
        </div>
      </LoginPage>
    </>
  );
}
const LoginPage = styled.div`
  background-color: white;
  height: 100vh;
  display: grid;
  justify-content: center;
  place-items: center;
  .login {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .login img {
    object-fit: contain;
    height: 150px;
  }
  .login > button {
    width: 200px;
    margin-top: 100px;
    padding: 10px;
    background-color: #2e81f4;
    border-radius: 30px;
    font-size: 18px;
    color: white;
    border: 2px solid transparent;
  }
  .login > button:hover {
    background-color: white;
    color: #2e81f4;
    border: 2px solid #2e81f4;
  }
`;
