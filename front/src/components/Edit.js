import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { profilePUT } from '../app/features/user/userSlice';
import { resetStore } from '../app/actions';

function Edit() {
  const token = useSelector((state) => state.userInfo.token) ?? "";
  const firstName = useSelector((state) => state.userInfo.firstName) ?? "";
  const lastName = useSelector((state) => state.userInfo.lastName) ?? "";
  const userName = useSelector((state) => state.userInfo.userName) ?? "";
  const navigate = useNavigate();
  const separator = <span> </span>;

  const dispatch = useDispatch();
  let newUserName = "";
  const handleSave = () => {
    newUserName = document.getElementById('username').value;
    if (newUserName !== userName) {
      dispatch(profilePUT({ token, newUserName }))
      alert("profile updated")
    }
    navigate('/');
  }

  return (
    <div className="main bg-dark sign-in-content">
      <h1>Edit user info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" defaultValue={userName} />
          {/* <input type="text" id="username" value={userName} onChange={(event) => newUserName = event.target.value} /> */}
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstName" defaultValue={firstName} disabled />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastName" defaultValue={lastName} disabled />
        </div>
        <button className="edit-button" onClick={handleSave}>Save</button>{separator}
        <button className="edit-button" onClick={() => navigate('/user')}>Cancel</button>
      </form>
    </div>
  );
}

export default Edit;