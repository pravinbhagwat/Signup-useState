import './App.css';
import Signup from './Signup';


function App() {
  return (
    <div className="container">
      <div className="left">
        <div className="text">
          <p>Find 3D Objects, Mockups</p>
          <p>and Ilustration here</p>
        </div>
        <img src="./images/Abstraction.png" alt="logo" />
      </div>
      <Signup />
    </div>   
  );
}

export default App;
