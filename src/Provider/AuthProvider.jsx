import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";


export const AuthContex = createContext(null)
const AuthProvider = ({children}) => {



   const [user , setUser] = useState(null)
   const [ loding , setLoding] = useState(true)

   const googleProvaider = new GoogleAuthProvider()

   const googleLogin = () =>{
     setLoding(true)
     return signInWithPopup( auth , googleProvaider)
   }
  
  const createUser = ( email , password) =>{
     setLoding(true)
     return createUserWithEmailAndPassword( auth ,email , password)
  }
 const loginUser = ( email , password) =>{
   return signInWithEmailAndPassword(auth , email , password)
 }
 const logOut = () =>{
   setLoding(true)
  return signOut(auth)
}

 useEffect( () => {
   const unSubscribe =   onAuthStateChanged( auth , currentUser =>{
       setUser(currentUser)
       console.log(currentUser);
       setLoding(false)
    })
    return () => {
       unSubscribe()
    }
 },[])



  const authInfo = {createUser , loginUser , user, logOut , googleLogin , loding }
  return (
    <AuthContex.Provider value={ authInfo}>
       {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;