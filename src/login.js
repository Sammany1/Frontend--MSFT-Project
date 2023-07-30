import React from "react";
import './login.css';
export default function Login() {
    const sample = require('./temp.json');
    console.log(sample);
    return ( 
        
        <div className="login">
            <div className="background" >
                <div className="box">
                    <div className="box_text">
                    Please Enter Room ID Here
                    </div>
                    <div className="box_input">
                    <form action="/url" method="GET">
                    <input type="text" id="id" name="room_id" placeholder="Enter room ID.."></input>
                    </form>
                    </div>
                    <div >
                    <button className="button" type="button" id="myBtn" onclick="Enter_Button()" >Enter</button>
                    {/* <input type="button" class="button" value="Enter"></input> */}
                    {/* <button class="button-50" role="button">Button 50</button> */}
                    </div>
                </div>
            </div>    
         
        </div>
    );
}
