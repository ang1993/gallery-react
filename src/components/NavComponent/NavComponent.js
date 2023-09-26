import React from "react";
import { Link } from "react-router-dom";
import "./navcomponent.css";
import { useSelector } from "react-redux";
import logo from "../../assets/artBLogo.png";
import { FaCircle } from "react-icons/fa";

const NavComponent = () => {
  const { user } = useSelector((state) => state.UserReducer);

  return (
      <header className="NavBarBox">
        <div>
        <Link to="/"><img src={logo} className="MainLogo" alt="artbrowser" /></Link>
        </div>
        <nav>
          <ul class="globalNav">
            <li><Link className="nav-link" to="/collection">Collection</Link></li>
            <li><Link className="nav-link" to="/browse">Browse</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
          </ul>
        <div>
        {user && user.id ? (
              ""
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
            {user && user.id ? (
              <Link className="nav-link loggedUser" to="/login">
              <FaCircle className="on-cercle"/> {user.username}{" "}
              </Link>
            ) : (
              ""
            )}</div>
            </nav>
      </header>
  );
};

export default NavComponent;
