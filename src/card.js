import React from "react";
import RoundScreen from "./roundscreen.js";
import ChartExample from "./chart.js"
import ChartExample_appl from "./chart_appl.js"
import ChartExample_amzn from "./chart_amzn.js"
import ChartExample_ibm from "./chart_ibm.js"
import ChartExample_msft from "./chart_msft.js"
import Events from "./Events.js"
import './card.css';
import ibmImg from './ibm.png'
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useInterval from "./useintervalhook.js";
import Chart1 from "./chart.js";

export default function Card(props) {
    const location = useLocation()
    const [user, setUser] = useState(location.state.user)
    const [started, setStarted] = useState(location.state.started)
    const roomid = location.state.inputRoomId
    const [chartnum, setChart] = useState(0)
    const [numOfStocks, setNumOfStocks] = useState({ AAPL: 0, AMZN: 0, IBM: 0, MSFT: 0 })
    let [currentRound, setCurrentRound] = useState(1)
    let [IBMbuy, setIBMB] = useState(false)
    let [IBMsell, setIBMS] = useState(false)
    let [AMZNbuy, setAMZNB] = useState(false)
    let [AMZNsell, setAMZNS] = useState(false)
    let [MSFTbuy, setMSFTB] = useState(false)
    let [MSFTsell, setMSFTS] = useState(false)
    let [APPLbuy, setAPPLB] = useState(false)
    let [APPLsell, setAPPLS] = useState(false)
    const [intervalId, setIntervalId] = useState(null);
    const [AGraph, setAGraph] = useState([
        { name: "January", Total: 0 },
        { name: "February", Total: 0 },
        { name: "March", Total: 0 },
        { name: "April", Total: 0 },
        { name: "May", Total: 0 },
        { name: "June", Total: 0 },
        { name: "July", Total: 0 },
        { name: "August", Total: 0 },
        { name: "September", Total: 0 },
        { name: "October", Total: 0 },
    ])
    const [AMGraph, setAMGraph] = useState([
        { name: "January", Total: 0 },
        { name: "February", Total: 0 },
        { name: "March", Total: 0 },
        { name: "April", Total: 0 },
        { name: "May", Total: 0 },
        { name: "June", Total: 0 },
        { name: "July", Total: 0 },
        { name: "August", Total: 0 },
        { name: "September", Total: 0 },
        { name: "October", Total: 0 },
    ])
    const [IGraph, setIGraph] = useState([
        { name: "January", Total: 0 },
        { name: "February", Total: 0 },
        { name: "March", Total: 0 },
        { name: "April", Total: 0 },
        { name: "May", Total: 0 },
        { name: "June", Total: 0 },
        { name: "July", Total: 0 },
        { name: "August", Total: 0 },
        { name: "September", Total: 0 },
        { name: "October", Total: 0 },
    ])
    const [MGraph, setMGraph] = useState([
        { name: "January", Total: 0 },
        { name: "February", Total: 0 },
        { name: "March", Total: 0 },
        { name: "April", Total: 0 },
        { name: "May", Total: 0 },
        { name: "June", Total: 0 },
        { name: "July", Total: 0 },
        { name: "August", Total: 0 },
        { name: "September", Total: 0 },
        { name: "October", Total: 0 },
    ])
    const [roundStocks, setRoundStocks] = useState({
        AAPL: 0,
        AMZN: 0,
        IBM: 0,
        MSFT: 0,
    })
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:4000/round-stocks/${roomid}`).then(response => { setRoundStocks(response.data) }).catch(error => console.error(error))
        setAGraph(prevGraph => prevGraph.map((item, index) => {
            if (index === currentRound - 2) {
                return { ...item, Total: roundStocks.AAPL };
            } else {
                return item;
            }
        }));
        setAMGraph(prevGraph => prevGraph.map((item, index) => {
            if (index === currentRound - 2) {
                return { ...item, Total: roundStocks.AMZN };
            } else {
                return item;
            }
        }))
        setIGraph(prevGraph => prevGraph.map((item, index) => {
            if (index === currentRound - 2) {
                return { ...item, Total: roundStocks.IBM };
            } else {
                return item;
            }
        }))
        setMGraph(prevGraph => prevGraph.map((item, index) => {
            if (index === currentRound - 2) {
                return { ...item, Total: roundStocks.MSFT };
            } else {
                return item;
            }
        }))
        buysellAAPL()
        buysellAMZN()
        buysellIBM()
        buysellMSFT()
        axios.get(`http://localhost:4000/get-user/${roomid}?id=${user.user_id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => setUser(res.data))
            .catch(err => console.error(err));
        setIBMB(false);
        setIBMS(false);
        setAMZNB(false);
        setAMZNS(false);
        setMSFTB(false);
        setMSFTS(false);
        setAPPLB(false);
        setAPPLS(false);
        setNumOfStocks({ AAPL: 0, AMZN: 0, IBM: 0, MSFT: 0 })
    }, [currentRound])
    function buysellAAPL() {
        console.log('here')
        if (!APPLbuy && !APPLsell) {
            return
        }
        if (APPLbuy) {
            axios.post(`http://localhost:4000/actions/buy/${roomid}`, { stock: 0, amount: numOfStocks.AAPL, id: user.user_id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        if (APPLsell) {
            axios.post(`http://localhost:4000/actions/sell/${roomid}`, { stock: 0, amount: numOfStocks.AAPL, id: user.user_id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    function buysellIBM() {
        console.log('here')
        if (!IBMbuy && !IBMsell) {
            return
        }
        if (IBMbuy) {
            axios.post(`http://localhost:4000/actions/buy/${roomid}`, { stock: 2, amount: numOfStocks.IBM, id: user.user_id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        if (IBMsell) {
            axios.post(`http://localhost:4000/actions/sell/${roomid}`, { stock: 2, amount: numOfStocks.IBM, id: user.user_id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    function buysellAMZN() {
        console.log('here')
        if (!AMZNbuy && !AMZNsell) {
            return
        }
        if (AMZNbuy) {
            axios.post(`http://localhost:4000/actions/buy/${roomid}`, { stock: 1, amount: numOfStocks.AMZN, id: user.user_id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        if (AMZNsell) {
            axios.post(`http://localhost:4000/actions/sell/${roomid}`, { stock: 1, amount: numOfStocks.AMZN, id: user.user_id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    function buysellMSFT() {
        console.log('here')
        if (!MSFTbuy && !MSFTsell) {
            return
        }
        if (MSFTbuy) {
            axios.post(`http://localhost:4000/actions/buy/${roomid}`, { stock: 3, amount: numOfStocks.MSFT, id: user.user_id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        if (MSFTsell) {
            axios.post(`http://localhost:4000/actions/sell/${roomid}`, { stock: 3, amount: numOfStocks.MSFT, id: user.user_id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    const startInterval = () => {
        if (intervalId === null) {
            const id = setInterval(() => {
                axios.get(`http://localhost:4000/started/${roomid}`).then(response => { setStarted(response.data) }).catch(error => console.error(error))
            }, 1000);
            setIntervalId(id);
        }
    };
    if (currentRound == 11) {
        return (<>
            <Leaderboard></Leaderboard>
        </>)
    }
    const stopInterval = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };
    function limitAndValidateInput(event) {
        if (event.value === '') {
            event.value = ''
            return
        }
        const inputValue = event.value;

        // Ensure the input value is numeric
        if (!isNaN(inputValue)) {
            // Convert the input value to a number
            const numericValue = parseFloat(inputValue);

            // Limit the value between 0 and 10
            const clampedValue = Math.min(10, Math.max(0, numericValue));

            // Update the input value
            event.value = clampedValue;
        } else {
            // If input is not numeric, reset the input value
            event.value = '';
        }
    }

    // 0 -> AAPl
    // 1 -> AMZN
    // 2 -> IBM
    // 3 -> MSFT
    if (!started) {
        startInterval()
        return (<>
            <CircularProgressBar></CircularProgressBar>
        </>)

    // }
    // if (started) {
    //     stopInterval()
    // }
    return (
        <>
         <div className="all1">
            <div className="left_70">
                <Card2></Card2>
                <div className="chart1">
                <Navigation_Charts></Navigation_Charts>
                <Navigation_Charts></Navigation_Charts>
                    {chartnum === 0 ? <ChartExample_appl data={AGraph}></ChartExample_appl> : <></>}
                    {chartnum === 1 ? <ChartExample_amzn data={AMGraph}></ChartExample_amzn> : <></>}
                    {chartnum === 2 ? <ChartExample_ibm data={IGraph}></ChartExample_ibm> : <></>}
                    {chartnum === 3 ? <ChartExample_msft data={MGraph}></ChartExample_msft> : <></>}
                    
                    </div>
                    {chartnum === 0 ? <AAPL_Buy_Sell_Amount num={numOfStocks}></AAPL_Buy_Sell_Amount> : <></>}
      {chartnum === 1 ? <AMZN_Buy_Sell_Amount num={numOfStocks}></AMZN_Buy_Sell_Amount> : <></>}
      {chartnum === 2 ? <IBM_Buy_Sell_Amount num={numOfStocks}></IBM_Buy_Sell_Amount> : <></>}
      {chartnum === 3 ? <MSFTL_Buy_Sell_Amount num={numOfStocks}></MSFTL_Buy_Sell_Amount> : <></>}
            </div>
            <div className="right_30">
                <Timer2></Timer2>
                <Event_APPL></Event_APPL>
                {/* <Event_AMZN></Event_AMZN>
                <Event_IBM></Event_IBM>
                <Event_MSFT></Event_MSFT> */}
                <Owned></Owned>
                
                    
            </div>
         </div>
        </>
    );


    function AAPL_Buy_Sell_Amount(props) {



        return (

            <div>
                <div className="bottom_row">
                    <div className=' button'>
                        <div className="Company_Name">
                            AAPL
                        </div>
                        <div className="amount_input">
                            <form action="/url" method="GET">
                                <input onInput={(e) => limitAndValidateInput(e.target)} pattern="[0-9]" autoFocus="autofocus" onChange={(e) => { if (e.target.value === "") { setNumOfStocks({ AAPL: 0, AMZN: numOfStocks.AMZN, IBM: numOfStocks.IBM, MSFT: numOfStocks.MSFT }); return; } if (parseInt(e.target.value) != NaN) { setNumOfStocks({ AAPL: parseInt(e.target.value), AMZN: numOfStocks.AMZN, IBM: numOfStocks.IBM, MSFT: numOfStocks.MSFT }) } }} defaultValue={numOfStocks.AAPL === 0 ? "" : numOfStocks.AAPL} type="text" id="xxx" name="xxxxd" placeholder="# Stocks"></input>
                            </form>
                        </div>


                        {APPLbuy ?
                            <button onClick={() => setAPPLB(APPLbuy = false)} className='BUY'>Buy</button>
                            :
                            <button onClick={() => {
                                setAPPLS(APPLbuy = false)
                                setAPPLB(APPLbuy = true)
                            }} className='buy'>Buy</button>
                        }
                        {APPLsell ?
                            <button onClick={() => setAPPLS(APPLsell = false)} className='SELL'>Sell</button> :
                            <button onClick={() => {
                                setAPPLB(APPLsell = false)
                                setAPPLS(APPLsell = true)
                            }} className='sell'>Sell</button>
                        }

                    </div>


                </div>

            </div>


        )
    }

    function AMZN_Buy_Sell_Amount() {





        return (

            <div>
                <div className="bottom_row">
                    <div className=' button'>
                        <div className="Company_Name">
                            AMZN
                        </div>
                        <div className="amount_input">
                            <form action="/url" method="GET">
                                <input onInput={(e) => limitAndValidateInput(e.target)} pattern="[0-9]" autoFocus="autofocus" onChange={(e) => { if (e.target.value === "") { setNumOfStocks({ AAPL: numOfStocks.AAPL, AMZN: 0, IBM: numOfStocks.IBM, MSFT: numOfStocks.MSFT }); return; } if (parseInt(e.target.value) != NaN) { setNumOfStocks({ AAPL: numOfStocks.AAPL, AMZN: parseInt(e.target.value), IBM: numOfStocks.IBM, MSFT: numOfStocks.MSFT }) } }} defaultValue={numOfStocks.AMZN === 0 ? "" : numOfStocks.AMZN} type="text" id="xxx" name="xxxxd" placeholder="# Stocks"></input>
                            </form>
                        </div>

                        {AMZNbuy ?
                            <button onClick={() => setAMZNB(AMZNbuy = false)} className='BUY'>BUY</button>
                            :
                            <button onClick={() => {
                                setAMZNS(AMZNbuy = false)
                                setAMZNB(AMZNbuy = true)
                            }} className='buy'>BUY</button>
                        }
                        {AMZNsell ?
                            <button onClick={() => setAMZNS(AMZNsell = false)} className='SELL'>SELL</button> :
                            <button onClick={() => {
                                setAMZNB(AMZNsell = false)
                                setAMZNS(AMZNsell = true)
                            }} className='sell'>SELL</button>
                        }




                    </div>

                </div>
            </div>

        )
    }
    function nextRound() {
        console.log(currentRound)
        setCurrentRound(prev => prev == 10 ? prev = 11 : prev + 1)
    }
    function IBM_Buy_Sell_Amount() {







        return (

            <div>
                <div className="bottom_row">
                    <div className=' button'>
                        <div className="Company_Name">
                            IBM
                        </div>
                        <div className="amount_input">
                            <form action="/url" method="GET">
                                <input onInput={(e) => limitAndValidateInput(e.target)} pattern="[0-9]" autoFocus="autofocus" onChange={(e) => { if (e.target.value === "") { setNumOfStocks({ AAPL: numOfStocks.AAPL, AMZN: numOfStocks.AMZN, IBM: 0, MSFT: numOfStocks.MSFT }); return; } if (parseInt(e.target.value) != NaN) { setNumOfStocks({ AAPL: numOfStocks.AAPL, AMZN: numOfStocks.AMZN, IBM: parseInt(e.target.value), MSFT: numOfStocks.MSFT }) } }} defaultValue={numOfStocks.IBM === 0 ? "" : numOfStocks.IBM} type="text" id="xxx" name="xxxxd" placeholder="# Stocks"></input>
                            </form>
                        </div>

                        {IBMbuy ?
                            <button onClick={() => setIBMB(IBMbuy = false)} className='BUY'>BUY</button>
                            :
                            <button onClick={() => {
                                setIBMS(IBMsell = false)
                                setIBMB(IBMbuy = true)
                            }} className='buy'>BUY</button>
                        }
                        {IBMsell ?
                            <button onClick={() => setIBMS(IBMsell = false)} className='SELL'>SELL</button> :
                            <button onClick={() => {
                                setIBMB(IBMbuy = false)
                                setIBMS(IBMsell = true)
                            }} className='sell'>SELL</button>
                        }




                    </div>

                </div>
            </div>

        )
    }
    function MSFTL_Buy_Sell_Amount() {



        return (

            <div>
                <div className="bottom_row">
                    <div className=' button'>
                        <div className="Company_Name">
                            MSFT
                        </div>
                        <div className="amount_input">
                            <form action="/url" method="GET">
                                <input onInput={(e) => limitAndValidateInput(e.target)} pattern="[0-9]" autoFocus="autofocus" onChange={(e) => { if (e.target.value === "") { setNumOfStocks({ AAPL: numOfStocks.AAPL, AMZN: numOfStocks.AMZN, IBM: numOfStocks.IBM, MSFT: 0 }); return; } if (parseInt(e.target.value) != NaN) { setNumOfStocks({ AAPL: numOfStocks.AAPL, AMZN: numOfStocks.AMZN, IBM: numOfStocks.IBM, MSFT: parseInt(e.target.value) }) } }} defaultValue={numOfStocks.MSFT === 0 ? "" : numOfStocks.MSFT} type="text" id="xxx" name="xxxxd" placeholder="# stocks"></input>
                            </form>
                        </div>

                        {MSFTbuy ?
                            <button onClick={() => setMSFTB(MSFTbuy = false)} className='BUY'>BUY</button>
                            :
                            <button onClick={() => {
                                setMSFTS(MSFTsell = false)
                                setMSFTB(MSFTbuy = true)
                            }} className='buy'>BUY</button>
                        }
                        {MSFTsell ?
                            <button onClick={() => setMSFTS(MSFTsell = false)} className='SELL'>SELL</button> :
                            <button onClick={() => {
                                setMSFTB(MSFTbuy = false)
                                setMSFTS(MSFTsell = true)
                            }} className='sell'>SELL</button>
                        }
                    </div>

                </div>
            </div>

        )
    }
    function setRound() {

    }
    function Navigation_Charts() {
        return (

            <div>
                <div className="Charts_buttons">
                    <button onClick={() => setChart(0)} className="button_X_Chart" type="button" id="myBtn"  >
                        <img width="35" height="35" src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"></img>

                        {/* AAPL */}
                    </button>
                    <button onClick={() => setChart(1)} className="button_X_Chart" type="button" id="myBtn"  >
                        <img width="35" height="35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/900px-Amazon_icon.svg.png?20210720180728"></img>

                        {/* AMZN */}
                    </button>
                    <button onClick={() => setChart(2)} className="button_X_Chart" type="button" id="myBtn"  >
                        <img width="45" height="25" src={ibmImg}></img>

                        {/* IBM */}
                    </button>
                    <button onClick={() => setChart(3)} className="button_X_Chart" type="button" id="myBtn"  >

                        <img width="35" height="35" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsVlN9UWq_VPsPuu7RiId5muc3QZfOk3MKibumRASwtXhR21hc"></img>
                        {/* MSFT */}
                    </button>
                </div>
            </div>

        );

    }
    function Card2() {

        const sample = require('./temp.json');



        // console.log(data)    

        return (
            <div className="allC">
                <div className="profile_card">
                    <div className="leftC">
                        <div className="top_textC">
                            <div className="top_text_headerC" >
                                Welcome {user.username} <br />
                            </div>
                            <div className="top_text_subC">
                                your account value is:
                            </div>
                        </div>
                        <div className="main_numberC">
                            ${user.Balance.toFixed(2)}
                        </div>
                    </div>
                    <div className="right_textC">
                        Available Amount = ${user.Balance.toFixed(2)} <br />
                        Stocks Value = ${user.Stock_Value.toFixed(2)} <br />
                    </div>
                </div>




                {/* AMZN <br/>
                AAPL <br/> 
                IBM  <br/>
      */}

            </div>
        );
    }
    function Owned(props) {
        return (
            <div className="owned_card">
                <div className="headerO">
                    Owned
                </div>
                <div className="row">
                    <div className="nameO">
                        APPL
                    </div>
                    {/* <div className="status">
                        +9.77%
                    </div> */}
                    <div className="owned">
                        {user.stocks[0]}
                    </div>

                </div>
                <div className="row">
                    <div className="nameO">
                        AMZN
                    </div>
                    {/* <div className="status">
                        +9.77%
                    </div> */}
                    <div className="owned">
                        {user.stocks[1]}
                    </div>
                </div>
                <div className="row">
                    <div className="nameO">
                        IBM
                    </div>
                    {/* <div className="status">
                        +9.77%
                    </div> */}
                    <div className="owned">
                        {user.stocks[2]}
                    </div>
                </div>
                <div className="row">
                    <div className="nameO">
                        MSFT
                    </div>
                    {/* <div className="status">
                        +9.77%
                    </div> */}
                    <div className="owned">
                        {user.stocks[3]}
                    </div>
                </div>
            </div>)
    }
    function Market(props) {
        const Stocksvalue = 99;
        let [APPLbuy, setAPPLB] = useState(false)
        let [APPLsell, setAPPLS] = useState(false)
        let [AMZNbuy, setAMZNB] = useState(false)
        let [AMZNsell, setAMZNS] = useState(false)
        let [IBMbuy, setIBMB] = useState(false)
        let [IBMsell, setIBMS] = useState(false)
        let [MSFTbuy, setMSFTB] = useState(false)
        let [MSFTsell, setMSFTS] = useState(false)
        return (
            <div className='market'>
                <div id="container">
                    <div className="marketheader">
                        <b>Market</b>
                    </div>
                    <div id="floated-imgs">
                        <div className='appl'>
                            <img width="30" height="30" src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"></img>
                        </div>

                        <div className='amzn'>
                            <img width="30" height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/900px-Amazon_icon.svg.png?20210720180728"></img>
                        </div>
                        <div className='ibmp'>
                            <img width="35" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png"></img>
                        </div>

                        <div className='msft'>
                            <img width="30" height="30" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsVlN9UWq_VPsPuu7RiId5muc3QZfOk3MKibumRASwtXhR21hc"></img>
                        </div>
                    </div>

                </div>

                <div className='names'>
                    <div className='apple'>
                        <b>APPL</b>
                    </div>
                    <div className='amazon'>
                        <b> AMZN</b>
                    </div>
                    <div className='ibm'>
                        <b>  IBM</b>
                    </div>
                    <div className='microsoft'>
                        <b>MSFT</b>
                    </div>
                </div>
                <div className='stocksvalue'>
                    <div className='stockname'>
                        <b>Stock value</b>
                    </div>
                    <div className='stocksvalue1'>
                        ${Stocksvalue}<br></br>
                    </div>
                    <div className='stocksvalue2'>
                        ${Stocksvalue}<br></br>
                    </div>
                    <div className='stocksvalue3'>
                        ${Stocksvalue}<br></br>
                    </div>
                    <div className='stocksvalue4'>
                        ${Stocksvalue}<br></br>
                    </div>
                </div>

                <div className='count1'>
                    <div className='numstock'>
                        <b>Number of stocks</b><br></br>
                    </div>
                    <form action='#'>
                        <div className='count1'>
                            <input type="number" id="count1" name="count1" min="0" max="10" />
                        </div>
                        <div className='count2'>

                            <input type="number" id="count1" name="count1" min="0" max="10" />
                        </div>

                        <div className='count3'>

                            <input type="number" id="count1" name="count1" min="0" max="10" />

                        </div>
                        <div className='count4'>

                            <input type="number" id="count1" name="count1" min="0" max="10" />
                        </div>
                    </form>

                </div>
                <div className=' button'>
                    <div className='APPL'>

                        {APPLbuy ?
                            <button onClick={() => setAPPLB(APPLbuy = false)} className='BUY'>Buy</button>
                            :
                            <button onClick={() => {
                                setAPPLS(AMZNsell = false)
                                setAPPLB(APPLbuy = true)
                            }} className='buy'>Buy</button>
                        }
                        {APPLsell ?
                            <button onClick={() => setAPPLS(APPLsell = false)} className='SELL'>Sell</button> :
                            <button onClick={() => {
                                setAPPLB(APPLbuy = false)
                                setAPPLS(APPLsell = true)
                            }} className='sell'>Sell</button>
                        }
                    </div>
                    <div className='AMZN'>
                        {AMZNbuy ?
                            <button onClick={() => setAMZNB(AMZNbuy = false)} className='BUY'>Buy</button>
                            :
                            <button onClick={() => {
                                setAMZNS(AMZNsell = false)
                                setAMZNB(AMZNbuy = true)
                            }} className='buy'>Buy</button>
                        }

                        {AMZNsell ?
                            <button onClick={() => setAMZNS(AMZNsell = false)} className='SELL'>Sell</button> :
                            <button onClick={() => {
                                setAMZNB(AMZNbuy = false)
                                setAMZNS(AMZNsell = true)
                            }} className='sell'>Sell</button>
                        }
                    </div>
                    <div className='IBM'>
                        {IBMbuy ?
                            <button onClick={() => setIBMB(IBMbuy = false)} className='BUY'>Buy</button>
                            :
                            <button onClick={() => {
                                setIBMS(IBMsell = false)
                                setIBMB(IBMbuy = true)
                            }} className='buy'>Buy</button>
                        }
                        {IBMsell ?
                            <button onClick={() => setIBMS(IBMsell = false)} className='SELL'>Sell</button> :
                            <button onClick={() => {
                                setIBMB(IBMbuy = false)
                                setIBMS(IBMsell = true)
                            }} className='sell'>Sell</button>
                        }
                    </div>
                    <div className='MSFT'>
                        {MSFTbuy ?
                            <button onClick={() => setMSFTB(MSFTbuy = false)} className='BUY'>Buy</button>
                            :
                            <button onClick={() => {
                                setMSFTS(MSFTsell = false)
                                setMSFTB(MSFTbuy = true)
                            }} className='buy'>Buy</button>
                        }
                        {MSFTsell ?
                            <button onClick={() => setMSFTS(MSFTsell = false)} className='SELL'>Sell</button> :
                            <button onClick={() => {
                                setMSFTB(IBMbuy = false)
                                setMSFTS(IBMsell = true)
                            }} className='sell'>Sell</button>
                        }
                    </div>
                </div>
            </div>
        )

    }

    function Leaderboard(props) {
        const [lead, setLead] = useState({});
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            axios.get(`http://localhost:4000/leaderboard/${roomid}`)
                .then(res => {
                    console.log(res.data);
                    setLead(res.data);
                    setLoading(false); 
                })
                .catch(err => console.log(err));
        }, []);
    
        return (
            <div className="container3">
                <div className="body">
                    <ol>
                        <li>
                            <div className="lead">
                                Leaderboard
                            </div>
                        </li>
                        {loading ? (
                            <li>Loading...</li>
                        ) : (
                            <>
                                <li><mark>{lead['1']['name']}</mark></li>
                                <li><mark>{lead['2']['name']}</mark></li>
                                <li><mark>{lead['3']['name']}</mark></li>
                                <li><mark>{lead['4']['name']}</mark></li>
                            </>
                        )}
                    </ol>
                </div>
            </div>
        );
    }
    


    function Timer2(props) {


        useInterval(() => {

            setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
            if (count == 0) {
                setCount(5)
                nextRound()

            }
        }, 1000, null)



        return (
            <div className="timecontainer">
                <div className="timer">
                    <b>Time left: </b><br></br>
                    <b><div className="timenum">{count}</div> </b>
                </div>
            </div>
        );
    };
}





const CircularProgressBar = () => {
    return (
        <div className="center-circle">
            <div className="circular-progress">
                <div className="circle"></div>
            </div>
            <p className="progress-text">Awaiting Users</p>
        </div>
    );
};





function Event_APPL() {

    const [x1,setX1]= useState('event 1');
  
    const clickHandler= () => {
      setX1('New Event Based on fed Data from backend Data from backend')
    
    }
    return (
      <>
      <div className="flex-container">
        <div className="item">
  
          <p>Company AAPL</p>
          <p> {x1}</p>
          
           </div>
  
      </div>
      
      </>
    );
  
  }
  

  function Event_AMZN() {

    const [x1,setX1]= useState('event 1');
  
    const clickHandler= () => {
      setX1('New Event Based on fed Data from backend Data from backend')
    
    }
    return (
      <>
      <div className="flex-container">
        <div className="item">
  
          <p>Company AMZN</p>
          <p> {x1}</p>
          
           </div>
  
      </div>
      
      </>
    );
  
  }
  

  function Event_IBM() {

    const [x1,setX1]= useState('event 1');
  
    const clickHandler= () => {
      setX1('New Event Based on fed Data from backend Data from backend')
    
    }
    return (
      <>
      <div className="flex-container">
        <div className="item">
  
          <p>Company IBM</p>
          <p> {x1}</p>
          
           </div>
  
      </div>
      
      </>
    );
  
  }
  

  function Event_MSFT() {

    const [x1,setX1]= useState('event 1');
  
    const clickHandler= () => {
      setX1('New Event Based on fed Data from backend Data from backend')
    
    }
    return (
      <>
      <div className="flex-container">
        <div className="item">
  
          <p>Company MSFT</p>
          <p> {x1}</p>
          
           </div>
  
      </div>
            </>
    );
  
  }
  

  