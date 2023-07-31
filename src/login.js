import React, { useState } from "react";
import './login.css';
import { sample } from "underscore";

function Enter_Button() {
    
  }

export default function Login() {
    const sample = require('./temp.json');
    console.log(sample);
    function Enter_Button() {
         alert('Hello!');
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
                    <div >
                    <button className="button_left" type="button" id="myBtn" onclick = {() => {
  this.sayHello();
  this.setState({ name: "James"});
}} >Enter</button>
                    {/* <input type="button" class="button" value="Enter"></input> */}
                    {/* <button class="button-50" role="button">Button 50</button> */}
                    </div>
                    </div>
                    <div className="right-box">
                    <div className="box_text_right">
                    Create a New Room 
                    </div>
                    <div className="box_output_right">                
                    Your Room ID: {sample.users.random_id}
                    </div>
                    <div >
                    <button className="button_right" type="button" id="myBtn" onclick="Enter_Button()" >Get Room ID prop</button>
                    {/* <input type="button" class="button" value="Enter"></input> */}
                    {/* <button class="button-50" role="button">Button 50</button> */}
                    </div>
                </div>
            </div>    
         
        </div>
    );
}
