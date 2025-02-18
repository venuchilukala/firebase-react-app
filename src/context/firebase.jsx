import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

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

export const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((e) => alert(`User with ${email} is created`))
      .catch((e) => alert(e.message));
  };

  const putData = (path, data) => {
    set(ref(database, path), data)
      .then((e) => alert("Data added"))
      .catch((e) => alert("Error occured while adding"));
  };

  return (
    <FirebaseContext.Provider value={{ signupUser, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
