import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    // some fancy firebase login system 
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        history.push('/')
      }
    })
    .catch(error => alert(error.message))

  }

  const register = e => {
    e.preventDefault();
    // some fancy firebase register system 
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        history.push('/')
      }
    })
    .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
        <Link to="/">
            <img className='login__logo' src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png" alt="" />
        </Link>

        <div className='login__container'>
            <h1>Log in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} /><br />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
                <button type='submit' className='login__signinButton' onClick={signIn} >Sign In</button>
                
            </form>
            <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
            </p>

            <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>

        </div>
        
    </div>
  )
}

export default Login