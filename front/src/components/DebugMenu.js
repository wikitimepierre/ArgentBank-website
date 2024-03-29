import React from 'react';
import { Link } from 'react-router-dom';
import DebugCounter from './DebugCounter';
import DebugUserInfo from './DebugUserInfo';

// pas sur de ça
import { useSelector, useDispatch } from "react-redux";


function DebugMenu() {

  let separator = <span>&nbsp;&nbsp;</span>;

  const isDebug = useSelector((state) => state.debugCheckbox.value);

  return isDebug ? (
    <div style={{ backgroundColor: 'lightgrey' }}>
      <Link to="/">HOME</Link>{separator}
      <Link to="/sign-in">SIGN</Link>{separator}
      <Link to="/edit">EDIT</Link>{separator}
      <Link to="/user">USER</Link>{separator}
      <Link to="/mockup">MOCKUP</Link>{separator}
      {/*}      <DebugCounter />*/}
      <DebugUserInfo />
    </div>
  ) : null;
}

export default DebugMenu;
