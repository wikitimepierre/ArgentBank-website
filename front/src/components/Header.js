import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/argentBankLogo.png';
import DebugCheckbox from './DebugCheckbox';

function Header() {
  const dispatch = useDispatch();

  const username = "XXXXXX"
  //TODO: get username from redux store
  //username = useSelector(state => state.userinfo.userName);

  let content;
  const location = useLocation();
  switch (location.pathname) {
    case "/":
      content = (<span>
        <i className="fa fa-user-circle"> <span> <Link to="/sign-in"> Sign In</Link> </span> </i>
      </span>);
      break;
    case "/sign-in":
      content = <a> <Link to="/">Home</Link></a>;
      break;
    case "/user":
    case "/edit":
      content =
        <span>
          <i className="fa fa-user-circle">
            <a>
              <Link to="/user">{username}</Link>
            </a>
          </i>
          <span>&nbsp;&nbsp;</span>
          <i className="fa fa-sign-out">
            <a>
              <Link to="/"> Sign Out</Link>
            </a>
          </i>
        </span>
        ;
      break;
    default:
      content = null;
  }

  return (
    <nav className="main-nav">
      <div className="inrow">
        <DebugCheckbox />
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
      </div>
      <div>
        {content}
      </div>
    </nav >
  );
}

export default Header;
