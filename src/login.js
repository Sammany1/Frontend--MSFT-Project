import React, { useState } from "react";
import './login.css';
import axios from 'axios';
function Enter_Button() {

}


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
                        <button className="button_left" type="button" id="myBtn" onclick={Enter_Button()} >Enter</button>
                    </div>
                </div>
                <div className="right-box">
                    <div className="box_text_right">
                        Create a New Room
                    </div>
                    <div className="box_output_right">
                        Your Room ID: {roomId}
                    </div>
                    <div >
                        <button className="button_right" type="button" id="myBtn" onClick={() => Room_ID_Button()} >
                            Get Room ID
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
