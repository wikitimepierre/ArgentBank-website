import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Account from './Account';

function Accounts() {
  const navigate = useNavigate();

  const userName = useSelector((state) => state.userInfo.userName) ?? "";
  const welcome = "Welcome back \n" + userName;

  const firstName = useSelector((state) => state.userInfo.firstName) ?? "";
  const amount1 = firstName === "Tony" ? "$2,682.08" : "$2,145,082.79";
  const amount2 = firstName === "Tony" ? "$15,545.93" : "$150,584,928.42";
  const amount3 = firstName === "Tony" ? "$18,021.62" : "$184,124,623.30";

  return (
    <div className="header main bg-dark">
      <br /><h1>{welcome}</h1>
      <button className="edit-button" onClick={() => navigate('/edit')}>Edit Name</button><br /><br />
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount={amount1}
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount={amount2}
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount={amount3}
        description="Current Balance"
      />
      <br />
    </div>
  );
}

export default Accounts;