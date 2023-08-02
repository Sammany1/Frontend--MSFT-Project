import logo from './logo.svg';
import './App.css';
import Card from "./card.js"
import useState from "./card.js"
import Login from "./login.js"
import useStateLogin from "./login.js"
import { AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
// import "../public/index.css";

function App() {
  const navigate=useNavigate();

  return (
    <div>
      <div className="App">
        {/* <Login /> */}
        {/* <Card /> */}
      </div>
    </div>

  );
}

export default App;
