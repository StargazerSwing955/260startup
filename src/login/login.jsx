import React from 'react';
import{login, register} from '../service';

export function Login({setUser}) {
  
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

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

    return (
     <main>
      
        <h2>PetPet Login</h2>

        
        <div className="input username">
            <span>Username:</span>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input password">
            <span>Password:</span>
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="submit-button">
            <button onClick={registerUser}>Register</button>
            <button onClick={loginUser}>Login</button>
        </div>
        
    </main>
  );
}