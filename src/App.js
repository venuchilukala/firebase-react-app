import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { useFirebase } from './context/firebase';



function App() {
  const { user } = useFirebase()
  return (

    <div className="App">
      <h1> Firebase</h1 >
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Private Route - Only show if user is logged in */}
        {user && <Route path="/" element={<Home />} />}
      </Routes>
    </div >

  );
}

export default App;
