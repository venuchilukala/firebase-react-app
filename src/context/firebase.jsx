import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwLk64XmwS44mudqf-4Sl59LeRd78lbNY",
  authDomain: "fire-base-react-app-vc203.firebaseapp.com",
  projectId: "fire-base-react-app-vc203",
  storageBucket: "fire-base-react-app-vc203.firebasestorage.app",
  messagingSenderId: "26240604548",
  appId: "1:26240604548:web:5c5341c54913f079a465d1",
  databaseURL: "https://fire-base-react-app-vc203-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is logged in
        console.log("Hello ", user);
        setUser(user);
      } else {
        console.log("User is logged out");
        setUser(null);
        navigate("/signup");
      }
    });
    return () => unsubscribe();
  }, []);

  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((e) => {
        alert(`User with ${email} is created`);
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const siginUser = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((e) => {
        alert(`User with ${email} is signed`);
        console.log("User is logged in")
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const signinWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
      .then(() => {
        alert("Signed in with Google");
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const userSignout = () => {
    signOut(firebaseAuth);
  };

  const putData = (path, data) => {
    set(ref(database, path), data)
      .then((e) => alert("Data added"))
      .catch((e) => alert("Error occured while adding"));
  };

  const authInfo = {
    signupUser,
    putData,
    signinWithGoogle,
    user,
    userSignout,
    siginUser
  };

  return (
    <FirebaseContext.Provider value={authInfo}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
