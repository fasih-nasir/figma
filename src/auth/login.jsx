import React from 'react'
import img1 from "../auth/picture/Group 231.png"
import "./auth.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
// FIREBASE
import { query, where, onSnapshot,doc, auth,getDownloadURL,ref,onAuthStateChanged,storage,uploadBytesResumable ,signInWithEmailAndPassword,updateDoc,addDoc,collection,db,createUserWithEmailAndPassword,app } from './config';
// ANTDESIGN
import { Form, Input, Button, Checkbox } from 'antd';
// ANTDESIGN
export default function Login() {
  // LOGIN STATE
  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")
  // LOGIN STATE
// LOGIN 
function loginsubmit(e){
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
  
    const user = userCredential.user;
    enqueueSnackbar(`Successfully Login!`, { variant: 'sccess' });
  })
  setemail("")
  setpass("")
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    enqueueSnackbar(`Error: ${errorMessage}`, { variant: 'error' });

  });




}
// 
  return (
    <>
     <div className="container-fluid px-5 m-0 p-0 d-flex flex-row  align-items-center  containerdiv">
      <div className="col-lg-8 divnone d-flex flex-row  align-items-center">
        <img src={img1} className='img-fluid col-9 i1' alt="" />
      </div>
      <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center flex-column">
          
          {/* Top Welcome Message */}
          <span className="mb-4  text-center">Welcome to Lorem..!</span>
      {/* Buttons Section */}
      <div className="col-9 mb-3 d-flex justify-content-around bgdiv">
            <button className="btn login  col-6 me-2">Login</button>
            <Link to={"/auth/create"}>
            <button className="btn resg col-6">Register</button>
            </Link>
          </div>
          <div className="text-center mt-3">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
          </div>

          {/* Username and Password Input Fields */}
          <div className="col-12 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Username"
            />
          </div>
          <div className="col-12 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your Password"
            />
          </div>

    <button onClick={loginsubmit}>Login Now </button>

          {/* Additional Text */}
        
        </div>
      </div>   
    </>
  )
}
