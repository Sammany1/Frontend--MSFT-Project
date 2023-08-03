import React, { useState } from "react";
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
 
export default function Login() {
    const sample = require('./temp.json');
    console.log(sample);

 const [roomId, setRoomId] = useState(0);
    function Room_ID_Button () {
        axios.get('http://localhost:4000/create-room').then(response => {
             setRoomId(response.data)
          })
          .catch(error => {
            console.error(error);
          });
    
    }
    const navigate=useNavigate();
    function Enter_Button() {
        navigate("games");
    
      }
    return ( 
        <div className="login">
            <div className="background" >
                <div className="left-box">
                    <div className="text_left"> 
                        Please Enter Room ID Here
                    </div>
                    <div className="id_input">
                        <form action="/url" method="GET">
                            <input type="text" id="id" name="room_id" placeholder="1234.."></input>
                        </form>
                    </div>  
                    <div className="user_input">   
                        <form action="/url" method="GET">
                            <input type="text" id="id" name="room_id" placeholder="Enter Your Name..."></input>
                        </form>
                    </div>
                    <div>
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}

                        <button className="button_left" type="button" id="myBtn"  onClick = {() => Enter_Button()} >Enter</button>
                    </div>
                </div>
            <div className="right-box">
                <div className="box_text_right">
                    Create a New Room 
                </div>
                    <button className="button_right" type="button" id="myBtn" onClick={() => setRoomId(sample.users.random_id)} >
                     Get Room ID
                     </button>
                 
                    
                     {roomId != 0 ? <div className="box_output_right">                
                        Your Room ID: {roomId}
                    </div>
                    : <div></div>
                    }
                </div>
                </div>
            </div>

        
    );
}
