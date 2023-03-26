import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { doLogin } from '../../store/auth/actions';
import { Button, Container, Form, FormGroup, FormLabel } from 'react-bootstrap';


const LoginComponent = () => {
  
  const {user} = useSelector((state) => state.UserReducer)
  const [username, setUserName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const dispatch = useDispatch()

  function submitLogin(){
    dispatch(doLogin({username:username, password:password}))
  }

  if(user && user.id) {
    return (
      <Navigate to="/user-area" replace></Navigate>
    )
  }

  return (
    <Container>
      <Form>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <input value={username} onChange={(e)=> setUserName(e.target.value)} placeholder="username" type="text"></input>
        </FormGroup>
        <FormGroup>
        <FormLabel>Password</FormLabel>
        <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password" type="password"></input>
      </FormGroup>
      <Button onClick={submitLogin}>Login</Button>
      </Form>
    </Container>
  )
}
;

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
