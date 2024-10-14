import React from 'react'
import img1 from "../auth/picture/Group 232.png"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { message } from 'antd';
import "./auth.css"
// FIREBASE
import { query, where, onSnapshot,doc, auth,getDownloadURL,ref,onAuthStateChanged,storage,uploadBytesResumable ,signInWithEmailAndPassword,updateDoc,addDoc,collection,db,createUserWithEmailAndPassword,app } from './config';
// ANTDESIGN
import { Form, Input, Button, Checkbox } from 'antd';
// ANTDESIGN
export default function Create() {
  // CREATE STATE
  const [createName, setCreateName] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPass, setCreatePass] = useState("");
  // CREATE STATE
  // CREATE
  
// SIGNUP
function handleSignUp(e) {
  e.preventDefault();

  // Create user account with Firebase
  createUserWithEmailAndPassword(auth, createEmail, createPass)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Create a new document in the 'users' collection
      const docRef = await addDoc(collection(db, "users"), {
        name: createName,
        email: createEmail,
      });

      // Update document with the generated ID
      await updateDoc(docRef, { id: docRef.id });

      // Show success message in the bottom right
      message.success('Account created successfully', 8); // 3 seconds duration

      // Clear the input values after account creation
      setCreateName("");   
      setCreateEmail(""); 
      setCreatePass("");   
          
    })
    .catch((error) => {
      // Handle any errors in creating the user
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error during user creation:', errorCode, errorMessage);
      
      // Optionally show an error message
      message.error('Error creating account: ' + errorMessage, 8);
    });
}
// SIGNUP 
  // CREATE
  return (
    <>
     <div className="container-fluid px-5 m-0 p-0 d-flex flex-row  align-items-center  containerdiv">
      <div className="col-lg-8 divnone d-flex flex-row  align-items-center">
        <img src={img1} className='img-fluid col-9 i1' alt="" />
      </div>
      <div className="col-lg-4 col-12 d-flex justify-content-center   flex-column">
          
          {/* Top Welcome Message */}
          <span className="mb-4  text-center">Welcome to Lorem..!</span>
      {/* Buttons Section */}
      <div className='d-flex justify-content-center align-items-center'>
      <div className="col-9 mb-3 d-flex justify-content-center bgdiv">
           <Link to={"/auth/login"}>
            <button className="btn   col-6 me-2">Login</button>
            </Link>
            
            <button className="btn login1 col-6">Register</button>
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
              placeholder="Enter your Username"
              value={createName} 
              onChange={(e) => setCreateName(e.target.value)}
            />
          </div>
          <div className="col-11 mb-3">
            <input
              type="email"
              className="form-control"
              value={createEmail} 
              onChange={(e) => setCreateEmail(e.target.value)}

              placeholder="Enter your Email"
            />
          </div>
          <div className="col-11 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your Password"
              value={createPass} 
              onChange={(e) => setCreatePass(e.target.value)}
            />
          </div>

    <div className='d-flex justify-content-end col-11 '>
     <button onClick={handleSignUp} className='btnreg col-7'>Register</button>
    </div>

          {/* Additional Text */}
        
        </div>
      </div>   
    </>
  )
}
