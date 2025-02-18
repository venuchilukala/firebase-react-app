import React, { useState } from "react";
import { useFirebase } from "../context/firebase";

const Signup = () => {
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password"
        required
      />
      <br/>
      <button
        onClick={(e) => {
          firebase.signupUser(email, password);
          firebase.putData("users/" + "venu", { email, password });
        }}
      >
        Signup
      </button>
      <button onClick={()=> firebase.signinWithGoogle()}>Signin with Google</button>
    </div>
  );
};

export default Signup;
