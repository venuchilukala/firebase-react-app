import {getDatabase, set, ref} from 'firebase/database'
import { app } from './firebase';
import './App.css';

const db = getDatabase(app)

function App() {
  const putData = () => {
    set(ref(db, "users/venu"),{
      id: 1,
      name: "Venu Chilukala",
      age: "22"
    })
  }

  return (
    <div className="App">
      <h1>Firebase App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
