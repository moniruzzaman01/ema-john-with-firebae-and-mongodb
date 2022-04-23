import React from "react";
import useFirebase from "../../hooks/usefirebase";

const SignIn = () => {
  const { gooleSignIn } = useFirebase();
  return (
    <div>
      <label htmlFor="">Email:</label>
      <input type="email" />
      <br />
      <label htmlFor="">Password:</label>
      <input type="password" name="" id="" />
      <br />
      <button>SignIn</button>
      <button onClick={gooleSignIn}>google</button>
      <button>github</button>
    </div>
  );
};

export default SignIn;
