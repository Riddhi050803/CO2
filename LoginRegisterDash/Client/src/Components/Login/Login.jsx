import React, {useState} from 'react'
import './Login.css'
import '../../App.css'
import Axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo.png'


import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {

  const [loginuserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const navigateTo = useNavigate()
   
  const loginUser = ()=>{
    // e.preventDefault();
    Axios.post('http://localhost:3002/login', {

      LoginUserName: loginuserName,
      LoginPassword: loginPassword
    }).then((response)=>{
      
      // console.log()

      if(response.data.message){
        navigateTo('/')

      }else{
        navigateTo('/dashboard')
      }
    }).catch((error) => {
      console.error("Error during login:", error);
      // Handle the error, such as displaying an error message to the user
    });

  }


  return (
    <div className='loginPage flex'>
      <div className='container flex'>
      <div className='videoDiv flex'>
        <video src={video} autoPlay muted loop></video>


        <div className="textDiv">
          <h2 className='title'>Your step towards Carbon Zero</h2>
          <p>Adopt the peace of nature!</p>
        </div>

        <div className="footerDiv flex">
          <span className='text'>Don't have an account?</span>
          <Link to={'/register'}> 
          <button className='btn'>Sign up</button>
          </Link>
        </div>
      </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid">
            {/* <span className='showMessage'>Login status will go here</span> */}
            <div className='inputDiv'>
              <label htmlFor="username">Username</label>
              <div className='input flex'>
              <FaUserShield className="icon" />
              <input type='text' id="username" placeholder="Enter Username" onChange={(event)=>{
                setLoginUserName(event.target.value)
              }} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                setLoginPassword(event.target.value)
              }}/>
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            {/* <a href="/dashboard">dashboard</a> */}

            <span className='forgotPassword'>
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login