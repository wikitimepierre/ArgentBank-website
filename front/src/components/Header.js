import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/argentBankLogo.png';

function Header() {

  let username = "XXXXXX";

  const location = useLocation();
  let content;
  let separator = <span>&nbsp;&nbsp;</span>;
  let debug = (<span> <a><Link to="/">HOME</Link>{separator}<Link to="/sign-in">SIGN</Link>{separator}<Link to="/edit">EDIT</Link>{separator}<Link to="/user">USER</Link>{separator}</a> </span>);

  switch (location.pathname) {
    case "/":
      content = (
        <span>
          <i className="fa fa-user-circle"> <span> <Link to="/sign-in"> Sign In</Link> </span> </i>
        </span>
      );
      break;
    case "/sign-in":
      content = <a> <Link to="/">Home</Link></a>;
      break;
    case "/user":
    case "/edit":
      content = (
        <span>
          <i className="fa fa-user-circle"> <a> <Link to="/user">{username}</Link> </a> </i> {separator}
          <i className="fa fa-sign-out"> <a> <Link to="/"> Sign Out</Link> </a> </i>
        </span>
      );
      break;
    default:
      content = null;
  }

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <Link to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div> {debug} {content} </div>
    </nav >
  );
}

export default Header;