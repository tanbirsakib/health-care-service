import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";


const Login =() => {
  const { error,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    isLoggedIn,
    toggleLogin,
    handleUserName,
    googleSignIn,
    setIsloading
    } = useAuth();
  
    const location = useLocation();
    const redirect_ui = location.state?.from;
    console.log(redirect_ui)
    const history = useHistory();
    const handleGoogleSignIn = ()=>{
      googleSignIn()
      .then(result =>{
        history.push(redirect_ui)
        // const user = result.user;
        // setUser(user);
      //  setIsLoggedIn(true);
      })
      .finally(()=>{
        setIsloading(false);
      })
    }
  return (
    <div className="mx-5">
      <form onSubmit={handleRegistration} >
        <h3 className="text-xl p-2 font-bold text-green-400">{isLoggedIn ? "Login" :  "Register"}</h3>
       {!isLoggedIn && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input onBlur={handleUserName} type="text" className="form-control" id="name" required />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3"
              required />
          </div>
          <div className="form-check">
            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
              Already Registered?
            </label>
          </div>
          <h4 className="text-danger text-center">{error}</h4>
        </div>
        <button type="submit" className="px-4 py-1 text-2xl border-1 rounded hover:bg-green-300">{isLoggedIn ? "Login" :  "Register"}</button>
      </form>
      <button onClick={handleGoogleSignIn} className="py-1 px-4 border-1 rounded m-1 hover:bg-green-300">Sign In with Google</button>
    </div>
  );
}

export default Login;