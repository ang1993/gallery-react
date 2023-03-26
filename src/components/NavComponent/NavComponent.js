import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./navcomponent.css";
import { useSelector } from 'react-redux';


const NavComponent = () => {
  const {user} = useSelector((state) => state.UserReducer)
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
           <Link className='nav-link' to='/'>My Page</Link>
        </Navbar.Brand>
        <Nav>
          <Link className='nav-link' to='/browse'>Browse</Link>
          <Link className='nav-link' to='/about'>About</Link>
          {user && user.id ? "" : <Link className='nav-link' to="/login">Login</Link>}
          {user && user.id ? <Link className='nav-link loggedUser' to="/login"> {user.username} </Link> : "" }
        </Nav>
      </Container>
    </Navbar>
  )
};

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
