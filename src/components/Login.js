import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import LoginContext from "../context/LoginContext";
import jwt_decode from "jwt-decode";
import { AiOutlineGoogle } from "react-icons/ai";

function Login() {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(false);
  const { setRealUser, setIsAuth } = useContext(LoginContext);
  const handleCallbackResponse = (response) => {
    setIsChecking(true);
    if (response) {
      const userObject = jwt_decode(response.credential);
      setRealUser(userObject);
      setIsAuth(true);
      navigate("/home");
      setIsChecking(false);
      console.log(userObject);
    }
    setIsChecking(false);
  };
  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id:
        "674267840115-5kkjevttmj8r63p8ak9rp61v1gc3uvn0.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"), {});
  }, []);

  return (
    <Container fluid className="login-form-container">
      {isChecking ? (
        <button disabled className="login-btn">
          logging in..
        </button>
      ) : (
        <button id="google-btn" className="login-btn">
          {/* GOOGLE <AiOutlineGoogle className="google-icon" /> */}
        </button>
      )}
    </Container>
  );
}

export default Login;
