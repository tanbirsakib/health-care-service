import {
  createUserWithEmailAndPassword,
  getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../Firebase/firebase.init";

// intitializing firebase auth
initFirebase();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
 
  // handle google sign in 
  const googleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      // const user = result.user;
      // setUser(user);
    //  setIsLoggedIn(true);
    })
    .catch(error=>{
      setError(error.message);
    })
  }
  const logOut = () => {
    signOut(auth)
    .then(()=>{
      setUser({});
    })
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be six character");
      return;
    }

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password should contain two uppercase letters");
      return;
    }

    isLoggedIn ? loginUser(email, password) : registerNewUser(email, password);
  };
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setUsername();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // const user = result.user;
        setError("");
        setUser(result.user)
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const toggleLogin = (e) => {
    setIsLoggedIn(e.target.checked);
  };

  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const setUsername = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        //profile name updated
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  useEffect(()=>{
    onAuthStateChanged(auth, user=>{
      if(user){
        setUser(user);
      }else{
        setUser({})
      }
    })
   },[])
  return {
    error,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    isLoggedIn,
    toggleLogin,
    handleUserName,
    user,
    googleSignIn,
    logOut,
    name
  };
};

export default useFirebase;
