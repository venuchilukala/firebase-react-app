import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Authentication = () => {
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, "venu@gmail.com", "venu123").then(
      (value) => console.log(value)
    );
  };
  return (
    <div>
        <h3>Click the below button to create a user😊</h3>
      <button onClick={signUpUser}>Create User</button>
    </div>
  );
};

export default Authentication;
