import logo from './logo.svg';
import './App.css';
import Card from "./card.js"
import useState from "./card.js"
import Login from "./login.js"
import Market from "./MM.js"
import Timer2 from "./MM.js"
import Leaderboard from "./MM.js"
import Card2 from "./MM.js"
import useStateLogin from "./login.js"
import { AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
// import "../public/index.css";

export default function App() {
  const navigate=useNavigate();

  return (
    <div>
      <div className="App">
      <Timer2></Timer2>
      <Card></Card>
      <div className='align1'>
        <Market></Market>
        <Leaderboard></Leaderboard>
      </div>
    </div>
      <div className="App">
        {/* <Login /> */}
      
      </div>
    </div>

  );
}

