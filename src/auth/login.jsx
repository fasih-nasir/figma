import React, { useState } from 'react';
import img1 from "../auth/picture/Group 231.png";
import "./auth.css";
import { Link ,useNavigate } from 'react-router-dom';

// FIREBASE
import { signInWithEmailAndPassword, auth } from './config';
// ANTDESIGN
import { message } from 'antd';

export default function Login() {
  const navigate=useNavigate()
  // LOGIN STATE
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // LOGIN
  function loginsubmit(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        // Success message on login
        message.success('Successfully logged in!', 3); // 3 seconds duration
        setEmail("");
        setPass("");
        navigate("/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        // Error message on login failure
        message.error(`Error: ${errorMessage}`, 3); // 3 seconds duration
      });
  }

  return (
    <>
      <div className="container-fluid px-5 m-0 p-0 d-flex flex-row align-items-center containerdiv">
        <div className="col-lg-8 divnone d-flex flex-row align-items-center">
          <img src={img1} className="img-fluid col-9 i1" alt="" />
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center flex-column">
          
          {/* Top Welcome Message */}
          <span className="mb-4 text-center">Welcome to Lorem..!</span>

          {/* Buttons Section */}
          <div className='d-flex justify-content-center align-items-center'>
            <div className="col-9 mb-3 d-flex justify-content-center bgdiv">
              <button className="btn login1 col-6 me-2" id='login'>Login</button>
              <Link to={"/auth/create"}>
                <button className="btn resg col-6">Register</button>
              </Link>
            </div>
          </div>

          <div className="text-start my-3">
            <span className='span1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
          </div>

          {/* Username and Password Input Fields */}
          <div className="col-11 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-11 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <div className='d-flex justify-content-end col-11'>
            <button onClick={loginsubmit} className='btnreg col-7'>Login Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
