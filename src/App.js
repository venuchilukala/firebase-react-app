import './App.css';
import Authentication from './firebase/Authentication';
import RealtimeDb from './firebase/Database';
import Signin from './pages/Signin';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <h1>Firebase App</h1>
      <Signup/>
      <Signin/>
    </div>
  );
}

export default App;
