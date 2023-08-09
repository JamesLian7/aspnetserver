import React from 'react';
import Account from '/Users/jameslian/Documents/aspnetserver/reactclient/src/Account.css'
import NavBar from "/Users/jameslian/Documents/aspnetserver/reactclient/src/components/NavBar.js"
function LoginForm() {
  const login = () => {
    // Perform login logic here
    // For this example, just show a message
    alert('Logged in!');
  };

  return (
    <div>
      <NavBar/>
    <div className="login-form">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button className="btn5" onClick={login}>Login</button>
    </div>
    </div>
  );
}

export default LoginForm;
