import React, { useState } from "react";
import './login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ComposedChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartExample from "./chart.js"
// import ChartExample from "./chart2.js"


export default function Login() {



    const [roomId, setRoomId] = useState(0);
    const [username, setName] = useState('');
    const [inputRoomId, setInputID] = useState('1')
    const [error, setError] = useState(-1)
    console.log(error)
    // error = 0 -> no error
    // error = 1 -> no username
    // error = 2 -> gameid doesn't exist
    // error = 3 -> full game
    async function nextpage() {
        await gameExists()
    }
    async function gameExists() {
        return axios.get(`http://localhost:4000/game-exists/${inputRoomId}`).then(response => {
            if (!response.data) {
                setError(2)
                return 
            }
            if (error === 0) {
               entergame()
            }

        }).catch(error => {
            console.error(error);
        });
    }
    function entergame() {
        return axios.post(`http://localhost:4000/enter-room/${inputRoomId}`, { "username": `${username}` }).then(response => {
            if(response.data === false){
                setError(3)
                return
            }
            if(error === 0){
                let user = response.data
                let started = false;
                axios.get(`http://localhost:4000/started/${inputRoomId}`).then(response =>{ started = response.data}).catch(error=>console.error(error))
                navigate('games',{state :{user, started,inputRoomId}})
            }
            
        })
            .catch(error => {
                console.error(error);
            });
    }
    function Room_ID_Button() {
        axios.get('http://localhost:4000/create-room').then(response => {
            setRoomId(response.data)
        })
            .catch(error => {
                console.error(error);
            });

    }
    const navigate = useNavigate();
    const [enterId, setEnterId] = useState(0);
    function Enter_ID_Button() {
        // navigate("games");
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
                {/* <ChartExample></ChartExample> */}

                <div className="left-box">
                    {/* <div>
                        <ChartExample></ChartExample>
                    </div> */}
                    <div className="text_left">
                        Please Enter Room ID Here
                    </div>
                    <div className="user_input">
                        <form action="/url" method="GET">
                            <input type="text" id="id" name="room_id" placeholder="Enter Your Name..." onChange={(e) => {
                                if (e.target.value === '') { setError(1) } else { setError(0) }
                                setName(e.target.value)
                            }}></input>
                        </form>
                    </div>
                    <div>
                        <div className="id_input">
                            <form action="/url" method="GET">
                                <input type="text" id="id" name="room_id" placeholder="1234.." onChange={(e) => { setInputID(e.target.value) }}></input>
                            </form>
                        </div>
                        <div>
                            <button className="button_left" type="button" id="myBtn" onClick={() => nextpage()} >
                                Enter
                            </button>
                            {/* {enterId != 1233 ? <div className="box_output_left">                
                             Wrong room ID !!
                        </div>
                         : <div></div>
                            } */}
                            {error === 1 ? <div className="box_output_left">Please enter a username First.</div> : <div></div>}
                            {error === 2 ? <div className="box_output_left">Incorrect GameId</div> : <div></div>}
                            {error === 3 ? <div className="box_output_left">Game is Full!</div> : <div></div>}
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <div className="box_text_right">
                        Create a New Room
                    </div>
                    <button className="button_right" type="button" id="myBtn" onClick={() => Enter_ID_Button()} >
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

