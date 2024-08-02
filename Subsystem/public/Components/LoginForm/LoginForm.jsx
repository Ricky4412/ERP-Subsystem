import React, { useState } from 'react';
import './LoginForm.css';
import {FaLock } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import image from "../Assets/logo.png";
import RegisterForm from './RegisterForm';

const LoginForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSwitchForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="con-wrapper">
      <div className="logo-wrapper">
        <img src={image} alt="" className='left-logo' />
      </div>
      <div className='wrapper'>
        
        {isRegistering ? (
          <RegisterForm switchForm={handleSwitchForm} />
        ) : (
          <form action="">
            <div className='recta'> </div>
            <h3 className='log1'>Login</h3>
            <h4 className='portal'>Login to your portal</h4>
            <div className="inbox">
              <p className='google'>Sign in with Google</p>
              <FcGoogle className='goo1' />
            </div>

            <div className="input-box">
              <label htmlFor="email" className='label'>Email</label>
              <input type="text" placeholder='Enter email' required />
              <FaEnvelope className='icon' />
            </div>
            <div className="input-box">
              <label htmlFor="password" className='label'>Password</label>
              <input type="password" placeholder='Enter password' required />
              <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>Not registered yet? <a href="#" onClick={handleSwitchForm}>Create an account</a></p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
