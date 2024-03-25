import React from 'react';
import { Link } from 'react-router-dom';
import DebugCounter from './DebugCounter';

// pas sur de ça
import { useSelector, useDispatch } from "react-redux";
import { debugCheckbox } from "../app/features/debugCheckbox/debugCheckboxSlice";


function DebugMenu() {

  let separator = <span>&nbsp;&nbsp;</span>;

  const isDebug = useSelector((state) => state.debugCheckbox.value);

  let debug = isDebug ? (
    <span>
      <a>
        <Link to="/">HOME</Link>
        {separator}
        <Link to="/sign-in">SIGN</Link>
        {separator}
        <Link to="/edit">EDIT</Link>
        {separator}
        <Link to="/user">USER</Link>
        {separator}
        <Link to="/accounttable">ACCOUNTS</Link>
        {separator}
      </a>
      <DebugCounter />
    </span>
  ) : "";

  return (
    <div> {debug} </div >
  );
}

export default DebugMenu;
