import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../pages/Faribase.config';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const AuthProvaider = ({children}) => {
  
   const [user , setUser] = useState([null]);

   const userLogin = (email, password) => {
   return  signInWithEmailAndPassword(auth, email, password)

   }
    const userSignUp = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(CurrentUser)=>{
             setUser(CurrentUser);
        })
        return () =>{
           unSubscribe();
        }
     })
    

   const userInfo ={
      user,
      userLogin,
      userSignUp,
    }
    return (
        <AuthContext  value={userInfo}>
            {children}
        </AuthContext >
    );
};

export default AuthProvaider;