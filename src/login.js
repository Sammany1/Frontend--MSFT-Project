import React, { useState } from "react";
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
 
export default function Login() {
    const sample = require('./temp.json');
    console.log(sample);

 const [roomId, setRoomId] = useState();
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
        navigate({pathname: `/games`});
    
      }
    return ( 
        <div className="login">
            <div className="background" >
                <div className="left-box">
                    <div className="box_text_left"> 
                        Please Enter Room ID Here
                    </div>
                    <div className="box_input_left">
                        <form action="/url" method="GET">
                            <input type="text" id="id" name="room_id" placeholder="1234.."></input>
                        </form>
                    </div>
                    <div>
                        <button className="button_left" type="button" id="myBtn" onClick = {() => Enter_Button()} >Enter</button>
                    </div>
                </div>
                <div className="right-box">
                    <div className="box_text_right">
                            Create a New Room 
                        </div>
                        {roomId != 0 ? <div className="box_output_right">                
                            Your Room ID: {roomId}
                        </div>
                        : <div>[</div>
                        }
                        
                        <div >

                        <button className="button_right" type="button" id="myBtn" onClick={() => setRoomId(sample.users.random_id)} >
                         Get Room ID
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
