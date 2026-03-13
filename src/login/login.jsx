import React from 'react';
import{login, register} from '../service';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login({setUser, authState, onAuthChange}) {
  
    //login and register function calls and definitions
  const loginUser = () => {
    if (login(username, password)) {
      setUser({username: username, password: password})
    }
  }  

  const registerUser = () => {
    if (register(username, password)) {
      setUser({username: username, password: password})
    }
  }

  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");


    return (
     <main>
      
        {authState !== AuthState.Unknown && <h2>PetPet Login</h2>}

        <div className="input username">
            <span>username:</span>
            <input type="text" placeholder="username" onChange={(e) => setusername(e.target.value)}/>
        </div>
        <div className="input password">
            <span>Password:</span>
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {/* {authState === AuthState.Authenticated && (
          <Authenticated username={user.username} onLogout={() => onAuthChange(username, AuthState.Unauthenticated)} />
        )}
         {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            username={username}
            onLogin={(loginusername) => {
              onAuthChange(loginusername, AuthState.Authenticated);
            }}
          />
        )} */}
        <div className="submit-button">
            <button onClick={registerUser}>Register</button>
            <button onClick={loginUser}>Login</button>
        </div>
        
    </main>
  );
}