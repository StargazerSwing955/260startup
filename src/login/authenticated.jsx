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
  React.useEffect(() => {
    fetch('/api/data/user')
      .then((response) => response.json())
      .then((userData) => {
        props.setUser({ username: userData.username, petState: userData.petState, score: userData.score });
        
  });}, []);
  
  
  return(
    <section className="authlogin">
    <img className = 'pet-icon float' src={props.petState.icon || "../pet_sprites/base_icon.png"} alt="pet sprite" />
    <h2>Welcome, {props.user.username}!</h2>
    
    <div className="submit-button"> 
        <button onClick={logOut}>Log Out</button>
                
        <button onClick={() => navigate('/play')}>Play</button>
    </div>
    </section>
    );
}