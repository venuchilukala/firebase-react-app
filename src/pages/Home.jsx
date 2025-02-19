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
    deleteDocumentById,
    putData,
    getData,
    name
  } = useFirebase();
  return (
    <div>
      <h1>Hello {name}</h1>
      <h5>Forestore  CRUD</h5>
      <button onClick={() => writeData()}>Add Data</button>
      <button onClick={() => makeSubCollection()}>Add Sub Data</button>
      <button onClick={() => getDocumnetById()}>Get Doc Data</button>
      <button onClick={() => getDocumentsByQuery()}>Get Query Data</button>
      <button onClick={() => updateDocumentById()}>Update Data</button>
      <button onClick={() => deleteDocumentById()}>Delete</button>
      <br />
      {/* Real time db */}
      <h5>Realtime database</h5>
      <button onClick={() => putData("grandfather/father/child", {id: 1, name: "Venu", age : 22})}>Put Trigger</button>
      <button onClick={() => getData("grandfather")}>Get Trigger</button>
      <br />
      <br />
      <button onClick={() => userSignout()}>Logout</button>
    </div>
  );
};

export default Home;
