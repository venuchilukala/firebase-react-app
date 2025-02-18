import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Home from './pages/Home';



function App() {

  return (
    <div className="App">
      <h1>Firebase</h1>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div >
  );
}

export default App;
