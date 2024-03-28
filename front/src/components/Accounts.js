import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from './Account';

function Accounts() {
  const userName = useSelector((state) => state.userInfo.userName) ?? "";
  const welcome = "Welcome back \n" + userName;
  const navigate = useNavigate();

  return (
    <div className="header main bg-dark">
      <br /><h1>{welcome}</h1>
      <button className="edit-button" onClick={() => navigate('/edit')}>Edit Name</button><br /><br />
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
      <br />
    </div>
  );
}

export default Accounts;