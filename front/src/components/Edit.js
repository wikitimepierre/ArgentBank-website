import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const firstName = useSelector((state) => state.userInfo.firstName) ?? "";
  const lastName = useSelector((state) => state.userInfo.lastName) ?? "";
  const userName = useSelector((state) => state.userInfo.userName) ?? "";
  const navigate = useNavigate();
  const separator = <span> </span>;

  return (
    <div className="main bg-dark sign-in-content">
      <h1>Edit user info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={userName} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstName" value={firstName} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastName" value={lastName} />
        </div>
        <button className="edit-button" onClick={() => navigate('/user')}>Save</button>{separator}
        <button className="edit-button" onClick={() => navigate('/user')}>Cancel</button>
      </form>
    </div>
  );
}

export default Edit;