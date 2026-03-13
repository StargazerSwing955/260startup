import { useNavigate } from 'react-router-dom'; 
import React from 'react';

export function Authenticated(props) {
const navigate = useNavigate();

  function logOut() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('username');
        props.onLogout();
      });
  }
  return(
    <div className="submit-button">
        <button onClick={logOut}>Log Out</button>
                
        <button onClick={() => navigate('/play')}>Play</button>
    </div>
    );
}