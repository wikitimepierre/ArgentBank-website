import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/');
  }

  return (
    <div className="bg-dark">
      <br />
      <div className="main sign-in-content">
        <h1>Wrong email or password</h1>
        <br /><br /><br /><br />
        <form onSubmit={handleSubmit}>
          <button type="submit" className="sign-in-button">Back</button>
        </form>
      </div>
      <br /><br /><br /><br />
    </div>
  );
}

export default Error;
