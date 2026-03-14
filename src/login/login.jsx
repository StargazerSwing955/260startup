import React from 'react';
import{login, register} from '../service';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login({user, setUser, authState, onAuthChange}) {

  //current known problems:
  // not properly calling the back end; think it's getting there and not knowing what to do
    //debugging is not helping
  //there's no user even when the authState says it's authenticated
  


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


    return (
     <main>
      
        {authState !== AuthState.Unknown && <h2>PetPet Login</h2>}
        
        {authState === AuthState.Authenticated && (
          <Authenticated user={user} setUser={setUser} onLogout={() => onAuthChange(user, AuthState.Unauthenticated)} />
        )}
         {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            onLogin={(loginusername) => {
              onAuthChange(loginusername, AuthState.Authenticated);
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