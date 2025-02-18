import React, { useState } from "react";
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { siginUser, signinWithGoogle } = useFirebase();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h3>Signin Page</h3>
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
      <br />
      <button
        onClick={(e) => {
          siginUser(email, password);
        }}
      >
        Signin
      </button>
      <button onClick={() => signinWithGoogle()}>
        Signin with Google
      </button>
      <br />
      <button onClick={() => navigate("/signup")}>Signup</button>
    </div>
  );
};

export default Signin;
