import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { doLogin } from "../../store/auth/actions";
import { Container } from "react-bootstrap";

const LoginComponent = () => {
  const { user } = useSelector((state) => state.UserReducer);
  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const dispatch = useDispatch();

  function submitLogin() {
    dispatch(doLogin({ username: username, password: password }));
  }

  if (user && user.id) {
    return <Navigate to="/user-area" replace></Navigate>;
  }

  return (
    <Container>
      <form>
        <h4>Hi there!</h4>
        <p>
          You must be logged in to use the search engine. Please enter your
          access data:
        </p>
        <fieldset>
          <label for="username">Username:</label>
          <input
            className="formInput"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
            type="text"
          ></input>
        </fieldset>
        <fieldset>
          <label for="password">Password:</label>
          <input
            className="formInput"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          ></input>
        </fieldset>
        <Link className="PrimaryButton" onClick={submitLogin}>
          Login
        </Link>
      </form>
    </Container>
  );
};

export default LoginComponent;
