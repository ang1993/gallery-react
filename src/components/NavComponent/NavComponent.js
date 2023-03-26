import React, { useDebugValue } from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./navcomponent.css";
import { useSelector } from 'react-redux';

const NavComponent = () => {
  const {user} = useSelector((state) => state.UserReducer)

  return (
    <div className='NavBarBox'>
      <Navbar>
        <Container>
          <Nav bg="light" variant="light">
            <Link className='nav-link' to='/collection'>Collection</Link>
            <Link className='nav-link' to='/browse'>Browse</Link>
            <Link className='nav-link' to='/about'>About</Link>
          </Nav>
            <Navbar.Brand>
              <Link className='nav-link' to='/'>ArtCalling</Link>
            </Navbar.Brand>
            <Nav>
              {user && user.id ? "" : <Link className='nav-link' to="/login">Login</Link>}
              {user && user.id ? <Link className='nav-link loggedUser' to="/login">🟢 {user.username} </Link> : "" }
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
};

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;

