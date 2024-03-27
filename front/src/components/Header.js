import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/argentBankLogo.png';
import DebugCheckbox from './DebugCheckbox';
import { resetStore } from '../app/actions';

function Header() {
  const userName = useSelector((state) => state.userInfo.userName) ?? "";
  const separator = <span>&nbsp;&nbsp;</span>

  // reset the store
  const dispatch = useDispatch();
  const signOutClick = () => { dispatch(resetStore()) };

  let content;
  const contentWoUserName = <span><i className="fa fa-user-circle"> <span> <Link to="/sign-in"> Sign In</Link> </span> </i></span>;
  const contentUserName = <span><i className="fa fa-user-circle">{separator}<a><Link to="/user">{userName}</Link></a></i>{separator}<i className="fa fa-sign-out">{separator}<span onClick={signOutClick}><a><Link to="/"> Sign Out</Link></a></span></i></span>;
  const contentHome = <a><Link to="/">Home</Link></a>;

  const location = useLocation();
  switch (location.pathname) {
    case "/": content = userName !== "" ? contentUserName : contentWoUserName; break;
    case "/sign-in": content = contentHome; break;
    case "/user": content = contentUserName; break;
    case "/edit": content = contentUserName; break;
    default: content = null;
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
