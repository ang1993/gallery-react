import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./navcomponent.css";


const NavComponent = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
           <Link className='nav-link' to='/'>My Page</Link>
        </Navbar.Brand>
        <Nav>
          <Link className='nav-link' to='/browse'>Browse</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link  className='nav-link' to='/login'>Login</Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
