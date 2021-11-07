import React from "react";
import useFirebase from "../../hooks/useFirebase";


const Login =() => {
  const { error,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    isLoggedIn,
    toggleLogin,
    handleUserName} = useFirebase();
  
  return (
    <div className="mx-5">
      <form onSubmit={handleRegistration} >
        <h3 className="text-xl p-2 font-bold">{isLoggedIn ? "Login" :  "Register"}</h3>
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
        <button type="submit" className="btn btn-primary p-1 m-1">{isLoggedIn ? "Login" :  "Register"}</button>
      </form>

    </div>
  );
}

export default Login;