import React from 'react';
import { FaUser, FaLock, FaEnvelope} from "react-icons/fa";
import './RegisterForm.css'
import { BsTelephonePlusFill } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";




const RegisterForm = ({ switchForm }) => {
  return (
    <form action="" className='wrapper2'>
      <div className='recta2'></div>
      <h3 className='log12'>Register</h3>
      <h4 className='portal2'>Create your account</h4>
      <h4 className='porta2'>Let's get you all set up so you can verify your personal account and begin setting up your work profile</h4>
     <div className="row1">
      <div className="input-box2">
        <label htmlFor="fullname" className='label2'>First name</label>
        <input type="text" placeholder='Enter first name' required />
        <FaRegUser className='icon2' />
      </div>
      <div className="input-box2">
        <label htmlFor="fullname" className='label2'>Surname</label>
        <input type="text" placeholder='Enter last name' required />
        <FaUser className='icon2' />
      </div>
      </div>
      <div className="row2">
      <div className="input-box2">
        <label htmlFor="email" className='label2'>Telephone number</label>
        <input type="email" placeholder='Enter number' required />
        <BsTelephonePlusFill className='icon2' />
      </div>
      <div className="input-box2">
        <label htmlFor="email" className='label2'>Ghana card No.</label>
        <input type="email" placeholder='Enter card number' required />
        <FaIdCard className='icon2' />
      </div>
      </div>
     <div className="row3">
      <div className="input-box2">
        <label htmlFor="password" className='label2'>Email</label>
        <input type="password" placeholder='Enter email' required />
        <FaEnvelope className='icon2' />
      </div>
      <div className="input-box2">
        <label htmlFor="password" className='label2'>Password</label>
        <input type="password" placeholder='Enter password' required />
        <FaLock className='icon2' />
      </div>
      </div>
      <div className="remember-forgot2">
              <label><input type="checkbox" />I agree to all <a href="#">terms</a>, privacy policies and <a href="#">conditions</a></label>
            </div>
      <button type="submit">Register</button>
      <div className="register-link2">
        <p>Already have an account? <a href="#" onClick={switchForm}>Login</a></p>
      </div>
    </form>
  );
}

export default RegisterForm;
