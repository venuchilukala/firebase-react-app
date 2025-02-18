import React, { useState } from "react";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from "../firebase";

const auth = getAuth(app)

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(e => alert("User created successfully"))
  }

  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password "
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <span>*Min of 6 chars</span>
      <br />
      <button onClick={signupUser}>Signup</button>
    </div>
  );
};

export default Signup;
