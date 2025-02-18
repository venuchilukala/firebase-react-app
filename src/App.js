import './App.css';
import Authentication from './firebase/Authentication';
import RealtimeDb from './firebase/Database';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <h1>Firebase App</h1>
      <Signup/>
      
    </div>
  );
}

export default App;
