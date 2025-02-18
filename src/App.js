import { useState } from 'react';
import './App.css';
import { useFirebase } from './context/firebase';



function App() {
  const firebase = useFirebase()
  console.log(firebase)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
      <h1>Firebase</h1>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Enter your password' required />
      <button onClick={(e)=>{firebase.signupUser(email, password); firebase.putData("users/" + "venu",{email, password})}}>Signup</button>
    </div >
  );
}

export default App;
