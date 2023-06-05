import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInApi from "../APIs/SignInApi";
import './CSS/auth.css';

const apiURL = "http://localhost:8080/authenticate";

const Auth = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = {
      username: userName,
      password: password,
    };
    fetch(apiURL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((result) => {
        if (!result.ok) {
          console.log(result.status);
          alert("Invalid username or password");
          throw Error(result.statusText);
        }
        return result.json();
      })
      .then((data) => {
        console.log(data.jwt);
        const token = data.jwt;
        localStorage.setItem("token", token);
        return token
      })
      .then((token) => {
        const apiURL2 = "http://localhost:8080/api/user/name/" + userName;
        fetch(apiURL2, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
          },
        })
          .then((result) => {
            return result.json();
          })
          .then((data) => {
            localStorage.setItem("username", data.username);
            localStorage.setItem("id", data.id);
            console.log(data);
            navigate("/student");
          });
      })
      .catch((error) => {
        console.log(error);
      })  
      /*
      props.setIsLoggedIn(true);
      props.setUsername(userName);
      */
    // props.history.push({
    //   pathname: '/',
    //   userName,
    //   jwt})
  };
  return (
    <div className="login-wrapper">
      <div className="signin">
        <h1>Login to Your Account</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" name="username" className="form-control" placeholder="User Name" value={userName} onChange={(event) => setUserName(event.target.value) }></input>
            <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value) }></input>
            <button type="submit" className="btn sign-in-button"> Sign In </button>
        </form>
      </div>
      <div className="sign-up">
        <div className="signup-wrapper">
          <h1>New Here?</h1>
          <p>Sign up to tutor and help others</p>
          <Link className="btn" to="/signup"> Sign Up </Link>
        </div>
      </div>
    </div>
)
}
export default Auth;
