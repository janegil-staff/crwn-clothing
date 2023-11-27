import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"; 

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return <div>
    <div>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  </div>;
};

export default SignIn;
