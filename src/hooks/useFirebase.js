import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification, signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useState } from "react";
import initFirebase from "../Firebase/firebase.init";

// intitializing firebase auth
initFirebase();
const auth = getAuth();
const useFirebase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

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
        emailVerification();
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

  // email verificatin
  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      //email verification sent
    });
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
  return {
    error,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    isLoggedIn,
    toggleLogin,
    handleUserName,
  };
};

export default useFirebase;
