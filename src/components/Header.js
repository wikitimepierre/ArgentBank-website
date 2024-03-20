import React from 'react';

function Header() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="../assets/images/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
    </nav>
  );
}

export default Header;
