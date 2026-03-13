import { useNavigate } from 'react-router-dom'; 
import React from 'react';

export function Authenticated(props) {
const navigate = useNavigate();

  function logOut() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        console.log('Logout failed. Assuming offline');
      })
      .finally(() => {
        localStorage.removeItem('username');
        props.onLogout();
      });
 

  }
  return(
    <section className="authlogin">
    <h2>Welcome, {props.username}!</h2>
    {/* <img className="pet-icon float" src={props.user.petState.icon} alt="Pet head icon"/> */}
    <div className="submit-button"> 
        <button onClick={logOut}>Log Out</button>
                
        <button onClick={() => navigate('/play')}>Play</button>
    </div>
    </section>
    );
}