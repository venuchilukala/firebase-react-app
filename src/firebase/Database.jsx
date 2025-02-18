import {getDatabase, set, ref} from 'firebase/database'
import { app } from '../firebase';

const db = getDatabase(app)

function RealtimeDb() {
  const putData = () => {
    set(ref(db, "users/venu"),{
      id: 1,
      name: "Venu Chilukala",
      age: "22"
    })
  }

  return (
    <div>
        <h3>Click to add data to realtim database.....</h3>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default RealtimeDb;
