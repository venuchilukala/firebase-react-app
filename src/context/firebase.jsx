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
import { getDatabase, set, ref, child, get, onValue } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();

// Realtime database
const database = getDatabase(firebaseApp);

// FireStore
const firestoreDb = getFirestore(firebaseApp);

export const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is logged in
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
        console.log("User is logged in");
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

  // Cloud Firestore database
  const writeData = async () => {
    const result = await addDoc(collection(firestoreDb, "users"), {
      name: "Mahi",
      age: 21,
      gender: "Female",
      city: "Hyderabad",
    });
    console.log("Result", result);
  };

  const makeSubCollection = async () => {
    const result = await addDoc(
      collection(firestoreDb, "users/E8LOS7dmVANnouefSn76/designation/"),
      {
        designation: "HR",
        salary: 60000,
        company: "Delloite",
        location: "Hyderabad",
      }
    );
    console.log("Result", result);
  };

  const getDocumnetById = async () => {
    const docRef = doc(firestoreDb, "users", "0M6LAW6zpSOmRnACBBYe");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Data", docSnap.data());
    } else {
      console.log("No data found");
    }
  };

  const getDocumentsByQuery = async () => {
    const userRef = collection(firestoreDb, "users");
    const q = query(userRef, where("city", "==", "Hyderabad"));

    const querySnaps = await getDocs(q);

    querySnaps.forEach((doc) => {
      console.log("Doc Data", doc.data());
    });
  };

  const updateDocumentById = async () => {
    const docRef = doc(firestoreDb, "users", "E8LOS7dmVANnouefSn76");
    await updateDoc(docRef, {
      city: "Pune",
    });
  };

  const deleteDocumentById = async () => {
    try {
      const docRef = doc(
        firestoreDb,
        "users",
        "E8LOS7dmVANnouefSn76",
        "designation",
        "5UHxlzagU5chHXec3UYg"
      );
      await deleteDoc(docRef);
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // Realtime database
  const putData = (key, data) => {
    set(ref(database, key), data)
    .then(() => alert(`Data added to Realtime DB at ${key}`))
      .catch(() => alert("Error occured while adding"));
  };

  const getData = async(key) => {
    const dbRef = ref(database)
    get(child(dbRef, key)).then(snapshot => console.log(snapshot.val()))
  }

  useEffect(()=>{
    onValue(ref(database,"grandfather/father/child"), (snapShot) => {
      setName(snapShot.val().name)
    })
  })

  const authInfo = {
    signupUser,
    putData,
    getData,
    signinWithGoogle,
    user,
    userSignout,
    siginUser,
    writeData,
    makeSubCollection,
    getDocumnetById,
    getDocumentsByQuery,
    updateDocumentById,
    deleteDocumentById,
    name
  };

  return (
    <FirebaseContext.Provider value={authInfo}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
