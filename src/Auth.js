import { useState, useRef } from "react";
import { logIn, logOut, signUp, useAuth } from "./firebaseConfig";

function Auth() {
  const currentUser = useAuth();
  const [ loading, setLoading ] = useState("");

  const refEmail = useRef();
  const refPassword = useRef();

  const handleSignUp = ()=> {
    setLoading(true);
    // console.log("Call SignUp : ", refEmail.current.value);
    signUp(refEmail.current.value, refPassword.current.value);
    setLoading(false);
  } // End of 계정 등록

  const handleLogIn = ()=> {
    setLoading(true);
    logIn(refEmail.current.value, refPassword.current.value);
    setLoading(false);
  } // End of 로그인

  const handleLogOut = ()=> {
    setLoading(true);
    console.log("Log Out");
    logOut();
    setLoading(false);
  }
  return (
    <div id="Auth">
      <span>Currently logged in as : {currentUser?.email}</span>
      <div>
        <input ref={refEmail} placeholder="E Mail" />
        <input ref={refPassword} type="password" placeholder="Password" />
      </div>
      <div>
        <button disabled={loading || currentUser!=null} onClick={handleLogIn} >Log In</button>
        <button disabled={loading || currentUser==null} onClick={handleLogOut} >Log Out</button>
      </div>

      <button disabled={loading || currentUser!=null} onClick={handleSignUp} >Sign Up</button>
    </div>
  );
}

export default Auth;
