 import React from 'react';
 
export function Unauthenticated(props) {
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function registerUser() {
    if (username.length > 0 && password.length > 0) {
    loginOrCreate(`/api/auth/create`);
  }
    else {
      setDisplayError('⚠ Error: Username and password must be at least 1 character long');
    }
    
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', username);
      props.onLogin(username);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  return(
      <section className="unauthlogin">
      <div className="input username">
            <span>username:</span>
            <input type="text" placeholder="username" onChange={(e) => setusername(e.target.value)}/>
        </div>
        <div className="input password">
            <span>Password:</span>
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
    <div className="submit-button">
        <button onClick={registerUser}>Register</button>

        <button onClick={loginUser}>Login</button>
    </div>
    </section>
  );
}