import React from 'react';
import{login, register} from '../service';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login({setUser, onAuthChange}) {
  
    //login and register function calls and definitions
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

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


    return (
     <main>
      
        {authState !== AuthState.Unknown && <h2>PetPet Login</h2>}

        <div className="input username">
            <span>Username:</span>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input password">
            <span>Password:</span>
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
         {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
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