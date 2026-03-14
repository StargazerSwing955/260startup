import React from 'react';
import{login, register} from '../service';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login({user, setUser, petState, setPetState, score, setScore, authState, onAuthChange}) {
  
  //login and register function calls and definitions; front end
  // const loginUser = () => {
  //   if (login(username, password)) {
  //     setUser({username: username, password: password})
  //   }
  // }  

  // const registerUser = () => {
  //   if (register(username, password)) {
  //     setUser({username: username, password: password})
  //   }
  // }

  function updateUserInfo() {
    fetch('/api/data/user')
        .then((response) => response.json())
        .then((userData) => {
            setUser(userData);
            setPetState(userData.petState);
            setScore(userData.score);
        });
    }


    return (
     <main>
      
        {authState !== AuthState.Unknown && <h2>PetPet Login</h2>}
        
        {authState === AuthState.Authenticated && (
          <Authenticated user={user} setUser={setUser} petState={petState} score={score} setScore={setScore} onLogout={() => onAuthChange(user, AuthState.Unauthenticated)} />
        )}
         {authState === AuthState.Unauthenticated && (
          <Unauthenticated user={user} petState={petState}setUser={setUser} score={score} setScore={setScore}
            onLogin={(loginusername) => {
              onAuthChange(loginusername, AuthState.Authenticated);
              updateUserInfo();
            }}
          />
        )}
        {/* <div className="submit-button">
            <button onClick={registerUser}>Register</button>
            <button onClick={loginUser}>Login</button>
        </div> */}
        
    </main>
  );
}