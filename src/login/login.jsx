import React from 'react';

export function Login({setUser}) {
  
  const loginUser = () => {
    setUser({username: "test", password: "test"})
  }  
    return (
     <main>
      
        <h2>PetPet Login</h2>

        
        <div className="input username">
            <span>Username:</span>
            <input type="text" placeholder="Username"/>
        </div>
        <div className="input password">
            <span>Password:</span>
            <input type="text" placeholder="Password"/>
        </div>
        <div className="submit-button">
              <button onClick={loginUser}>Submit</button> {/* <!-- debug to make submit the form later --> */}
        </div>
        
    </main>
  );
}