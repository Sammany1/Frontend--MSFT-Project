import React from "react";
import './login.css';
export default function Login() {
    const sample = require('./temp.json');
    console.log(sample);
    return ( 
        
        <div className="login">
            <div className="background" >
                <div className="left-box">
                    <div className="box_text_left">
                    Please Enter Room ID Here
                    </div>
                    <div className="box_input_left">
                    <form action="/url" method="GET">
                    <input type="text" id="id" name="room_id" placeholder="Enter room ID.."></input>
                    </form>
                    </div>
                    <div >
                    <button className="button_left" type="button" id="myBtn" onclick="Enter_Button()" >Enter</button>
                    {/* <input type="button" class="button" value="Enter"></input> */}
                    {/* <button class="button-50" role="button">Button 50</button> */}
                    </div>
                    </div>
                    <div className="right-box">
                    <div className="box_text_right">
                    Please Enter Room ID Here
                    </div>
                    <div className="box_input_right">
                    <form action="/url" method="GET">
                    <input type="text" id="id" name="room_id" placeholder="Enter room ID.."></input>
                    </form>
                    </div>
                    <div >
                    <button className="button_right" type="button" id="myBtn" onclick="Enter_Button()" >Enter</button>
                    {/* <input type="button" class="button" value="Enter"></input> */}
                    {/* <button class="button-50" role="button">Button 50</button> */}
                    </div>
                </div>
            </div>    
         
        </div>
    );
}
