import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault(); // this stops the refresh on submit
    // do the login logic here

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to the homepage
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); // this stops the refresh on register
    // do the register logic here

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create a new user and login, redirect to the homepage
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'
          alt=''
        ></img>
      </Link>

      <div className='login__container'>
        <h1>Login</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='email'
          ></input>
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type='password'
          ></input>
          <button onClick={login} type='submit' className='login__signInButton'>
            Login
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <p className='login__newToAmazon'>New to Amazon?</p>
        <button onClick={register} className='login__registerButton'>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
