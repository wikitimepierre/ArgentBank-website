import React from 'react';

function Edit() {
  return (
    <div className="main bg-dark sign-in-content">
      <h1>Edit user info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" />
        </div>
        <button className="edit-button">Save</button>
        <button className="edit-button">Cancel</button>
      </form>
    </div>
  );
}

export default Edit;