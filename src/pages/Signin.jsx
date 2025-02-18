import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((e) =>
      alert("User signedin successfully")
    ).catch(err => alert("Invalid credentials"));
  };

  return (
    <div className="signin-page">
        <h3>Signin Page</h3>
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

      <br />
      <button onClick={signinUser}>Signin</button>
    </div>
  );
};

export default Signin;
