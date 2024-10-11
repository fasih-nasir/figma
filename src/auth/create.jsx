import React from 'react'
import img1 from "../auth/picture/Group 232.png"
import { useState } from 'react'
import { Link } from 'react-router-dom';
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
async function handleSignUp(e) {
  e.preventDefault();

  // Img Upload Start
  const storageRef = ref(storage, `images/${img.name}`);
  const uploadTask = uploadBytesResumable(storageRef, img);

  // Start listening for upload state changes
  uploadTask.on(
    'state_changed', 
    (snapshot) => {
      // Track progress of the image upload
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    }, 
    (error) => {
      // Handle upload errors
      console.error('Error during upload:', error.message);
    },
    async () => {
      // This block runs after the image is uploaded
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    

      // Create user account
      createUserWithEmailAndPassword(auth, createEmail, createPass)
        .then(async (userCredential) => {
          const user = userCredential.user;

          // Firebase - Create a new document in 'accounts' collection
          const docRef = await addDoc(collection(db, "accounts"), {
            name: createName,
            email: createEmail,
            location:locPass,
            profileimg: downloadURL,  // Save the image URL in Firestore
          });

          // Update document with the generated ID
          await updateDoc(docRef, { id: docRef.id });

          setCreateName("");   
          setCreateEmail(""); 
          setCreatePass("");   
          setimg(null);       
          enqueueSnackbar(`${createName} Your account has been successfully created!`, { variant: 'success' });
        })
        
        .catch((error) => {
          // Handle any error in creating the user
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Error during user creation:', errorCode, errorMessage);
          enqueueSnackbar(`Error: ${error.message}`, { variant: 'error' });
        });
    }
  );
  // Img Upload End
}
// SIGNUP 
  // CREATE
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
           <Link to={"/auth/login"}>
            <button className="btn   col-6 me-2">Login</button>
            </Link>
            <button className="btn login col-6">Register</button>
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

    

          {/* Additional Text */}
        
        </div>
      </div>   
    </>
  )
}
