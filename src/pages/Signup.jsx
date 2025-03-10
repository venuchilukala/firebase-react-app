import React, { useState } from "react";
import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const firebase = useFirebase();

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
        <h3>Signup Page</h3>
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
          // eslint-disable-next-line
          firebase.putData("users/" + "venu", { email, password });
        }}
      >
        Signup
      </button>
      <button onClick={()=> firebase.signinWithGoogle()}>Signin with Google</button>
      <br />
      <button onClick={() => navigate("/signin")}>Signin</button>
    </div>
  );
};

export default Signup;
