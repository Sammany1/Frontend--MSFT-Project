import React, { useState } from "react";
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ComposedChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 





// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Login() {

    // const ChartExample = () => {
    //     const data = [
    //       { name: 'January', value: 1000 },
    //       { name: 'February', value: 1200 },
    //       { name: 'March', value: 1100 },
    //       { name: 'April', value: 1300 },
    //       { name: 'May', value: 1400 },
    //       { name: 'June', value: 1300 },
    //       { name: 'July', value: 1500 },
    //     ];}



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
const [enterId, setEnterId] = useState(0);
    function Enter_ID_Button(){
        navigate("games");
        axios.get('http://localhost:4000/create-room').then(response => {
             setRoomId(response.data)
          })
          .catch(error => {
            console.error(error);
          });
    }

    // const navigate=useNavigate();
    // function Enter_Button() {
    //     navigate("games");
    
    //   }
    return ( 
        <div className="login">
            <div className="background" >
{/* 
            <ResponsiveContainer width="100%" height={100}>
            <ComposedChart data = {data}>
             <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={false} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
              </ComposedChart>
             </ResponsiveContainer> */}


                <div className="left-box">
                    <div className="text_left"> 
                        Please Enter Room ID Here
                    </div>
                    <div className="user_input">
                        <form action="/url" method="GET">
                            <input type="text" id="id" name="room_id" placeholder="Enter Your Name..."></input>
                        </form>
                    </div>
                    <div>
                        <div className="id_input">   
                            <form action="/url" method="GET">
                                 <input type="text" id="id" name="room_id" placeholder="1234.."></input>
                            </form>
                        </div>
                        <div>
                             <button className="button_left" type="button" id="myBtn"  onClick = {() => enterId()} >
                                Enter
                            </button>
                            {enterId != 1233 ? <div className="box_output_left">                
                             Wrong room ID !!
                        </div>
                         : <div></div>
                            }
                        </div>
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

