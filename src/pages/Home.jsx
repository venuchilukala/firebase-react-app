import React from "react";
import { useFirebase } from "../context/firebase";

const Home = () => {
  const {
    user,
    userSignout,
    writeData,
    makeSubCollection,
    getDocumnetById,
    getDocumentsByQuery,
    updateDocumentById,
    deleteDocumentById
  } = useFirebase();
  return (
    <div>
      <h1>Hello {user.email}</h1>
      <button onClick={() => writeData()}>Add Data</button>
      <button onClick={() => makeSubCollection()}>Add Sub Data</button>
      <button onClick={() => getDocumnetById()}>Get Doc Data</button>
      <button onClick={() => getDocumentsByQuery()}>Get Query Data</button>
      <button onClick={() => updateDocumentById()}>Update Data</button>
      <button onClick={() => deleteDocumentById()}>Delete</button>

      <br />
      <button onClick={() => userSignout()}>Logout</button>
    </div>
  );
};

export default Home;
