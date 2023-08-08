import React from "react";
import ChartExample from "./chart.js"
import ChartExample_appl from "./chart_appl.js"
import ChartExample_amzn from "./chart_amzn.js"
import ChartExample_ibm from "./chart_ibm.js"
import ChartExample_msft from "./chart_msft.js"
import './card.css';

import { useState, useEffect } from "react";

export default function card() {
    return (

        <>
            <div className="all">
                <div className="top">
                    <Timer2></Timer2>
                    <Card2></Card2>
                </div>
                <div className="center">
                    <Navigation_Charts></Navigation_Charts>
                    <ChartExample></ChartExample>
                    <Owned></Owned>
                    <Leaderboard></Leaderboard>
                </div>
                <div className='bottom'>
                    <Buy_Sell_Amount></Buy_Sell_Amount>                    
                </div>

            </div>
        </>
    );

    function Buy_Sell_Amount(){
        
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

        <div>
            <div className="bottom_row">
                <div className=' button'>
                    <div className='APPL'>

                    <div className="amount_input">   
                            <form action="/url" method="GET">
                                 <input type="text" id="xxx" name="xxxxd" placeholder="1234.."></input>
                            </form>
                        </div>

                        {APPLbuy ?
                            <button onClick={() => setAPPLB(APPLbuy = false)} className='BUY'>BUY</button>
                            :
                            <button onClick={() => {
                                setAPPLS(AMZNsell = false)
                                setAPPLB(APPLbuy = true)
                            }} className='buy'>BUY</button>
                        }
                        {APPLsell ?
                            <button onClick={() => setAPPLS(APPLsell = false)} className='SELL'>SELL</button> :
                            <button onClick={() => {
                                setAPPLB(APPLbuy = false)
                                setAPPLS(APPLsell = true)
                            }} className='sell'>SELL</button>
                        }
                        
                    </div>
                        
                    
                </div>
                    
            </div>
        </div>

        )
    }
    function Navigation_Charts(){

        const sample = require('./temp.json');
        console.log(sample);


        // console.log(data)    

        return (

            <div>
                <div className="Charts_buttons">
                <button className="button_APPL_Chart" type="button" id="myBtn"  >
                             AAPL
                        </button>
                        <button className="button_APPL_Chart" type="button" id="myBtn"  >
                            AMZN
                        </button>
                        <button className="button_APPL_Chart" type="button" id="myBtn"  >
                             IBM
                        </button>
                        <button className="button_APPL_Chart" type="button" id="myBtn"  >
                             MSFT
                        </button>
                </div>
            </div>

        );
        
    }
    function Card2() {

        const sample = require('./temp.json');
        console.log(sample);


        // console.log(data)    

        return (
            <div className="allC">
                <div className="profile_card">
                    <div className="leftC">
                        <div className="top_textC">
                            <div className="top_text_headerC" >
                                Welcome {sample.users.user} <br />
                            </div>
                            <div className="top_text_subC">
                                your account value is
                            </div>
                        </div>
                        <div className="main_numberC">
                            ${sample.users.random_id}
                        </div>
                    </div>
                    <div className="right_textC">
                        Available Amount = $240 <br />
                        Stocks Value = $1090.29 <br />
                        Profit = + $240
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
                    <div className="status">
                        +9.77%
                    </div>
                    <div className="owned">
                        $10000$
                    </div>

                </div>
                <div className="row">
                    <div className="nameO">
                        AMZN
                    </div>
                    <div className="status">
                        +9.77%
                    </div>
                    <div className="owned">
                        $10000$
                    </div>
                </div>
                <div className="row">
                    <div className="nameO">
                        IBM
                    </div>
                    <div className="status">
                        +9.77%
                    </div>
                    <div className="owned">
                        $10000$
                    </div>
                </div>
                <div className="row">
                    <div className="nameO">
                        MSFT
                    </div>
                    <div className="status">
                        +9.77%
                    </div>
                    <div className="owned">
                        $10000$
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
                            <button onClick={() => {setMSFTB(IBMbuy = false)
                                setMSFTS(IBMsell = true)}} className='sell'>Sell</button>
                        }
                    </div>
                </div>
            </div>
        )

    }
    // function Leaderboard(_props) {

    //     return (
    //         <body>
    //             <main>
    //                 <div className='containerL'>
    //                     <div id="header">
    //                         <h1>Ranking</h1>
    //                     </div>
    //                     <div id="leaderboard">
    //                         <div class="ribbon"></div>
    //                         <table>
    //                             <tr>
    //                                 <td class="numberL">1</td>
    //                                 <td class="nameL">player 1</td>
    //                                 <td class="points">
    //                                     258.244 <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" />
    //                                 </td>
    //                             </tr>
    //                             <tr>
    //                                 <td class="numberL">2</td>
    //                                 <td class="nameL">player 2</td>
    //                                 <td class="points">258.242</td>
    //                             </tr>
    //                             <tr>
    //                                 <td class="numberL">3</td>
    //                                 <td class="nameL">player 3</td>
    //                                 <td class="points">258.223</td>
    //                             </tr>
    //                             <tr>
    //                                 <td class="numberL">4</td>
    //                                 <td class="nameL">player 4</td>
    //                                 <td class="points">258.212</td>
    //                             </tr>
    //                         </table>

    //                     </div></div>
    //             </main>
    //         </body>

    //     )
    // }

function Leaderboard(props){
   
   return( <>
{/* <body>
	<div class="container2">
		<div class="leaderboard">
			<div >
			    <h1>Leaderboard</h1>
			</div>
		</div>
	</div>
</body> */}
   <div className="container3">
   <div class="body">
				<ol>
					<li><div className="lead">
						leaderboard
					</div>
					</li>
					<li>
						<mark>Brandon Barnes</mark>
						<small>750</small>
					</li>
					<li>
						<mark>Raymond Knight</mark>
						<small>684</small>
					</li>
					<li>
						<mark>Trevor McCormick</mark>
						<small>335</small>
					</li>
					<li>
						<mark>Andrew Fox</mark>
						<small>296</small>
					</li>
				</ol>
			</div></div>
</>
   )
}


    function Timer2(props) {
        const [count, setCount] = useState(60);

        useEffect(() => {
            const timer = setInterval(() => {
                setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }, []);

        return (
            <div className="timer">
                <b>Time left: {count} seconds </b>
            </div>
        );
    };
}




/*function Market(props) {

    let [APPLbuy, setAPPLB] = useState(false)
    let [APPLsell, setAPPLS] = useState(false)
    let [AMZNbuy, setAMZNB] = useState(false)
    let [AMZNsell, setAMZNS] = useState(false)
    let [IBMbuy, setIBMB] = useState(false)
    let [IBMsell, setIBMS] = useState(false)
    let [MSFTbuy, setMSFTB] = useState(false)
    let [MSFTsell, setMSFTS] = useState(false)
    let Stocksvalue = 99
    return (

<div className="market">
    <div id="container">
        <div className="row2">
            <div id="floated-imgs">
                <img width="30" height="30" src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"></img>
            </div>
            <div className='names'>
              <b>APPL</b>
            </div>
            <div className='stocksvalue1'>
                 ${Stocksvalue}<br></br>
            </div>
            <div className="count">
            <form action='#'>
                <select id='number-dd' name='number'>
                    <option value=''></option>
                    <option value='one'>1</option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                </select>
            </form>
            </div>
            <div className=' button'>
        

          {APPLbuy ?
            <button onClick={() => setAPPLB(APPLbuy = false)} className='BUY'>buy</button>
            :
            <button onClick={() => {
              setAPPLS(AMZNsell = false)
              setAPPLB(APPLbuy = true)
            }} className='buy'>buy</button>
          }
          {APPLsell ?
            <button onClick={() => setAPPLS(APPLsell = false)} className='SELL'>sell</button> :
            <button onClick={() => {
              setAPPLB(APPLbuy = false)
              setAPPLS(APPLsell = true)
            }} className='sell'>sell</button>
          }
        </div>
    </div>
        <div className="row2">
            <div id="floated-imgs">
                <img width="50" height="50" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x480.png"></img>
             </div>
            <div className='names'>
              <b>AMZN</b>
            </div>
            <div className='stocksvalue'>
                 ${Stocksvalue}<br></br>
            </div>
            <div className="count2">
            <form action='#'>
                <select id='number-dd' name='number'>
                    <option value=''></option>
                    <option value='one'>1</option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                </select>
            </form>
            </div>
            <div className=' button'>

            {AMZNbuy ?
            <button onClick={() => setAMZNB(AMZNbuy = false)} className='BUY'>buy</button>
            :
            <button onClick={() => {
              setAMZNS(AMZNsell = false)
              setAMZNB(AMZNbuy = true)
            }} className='buy'>buy</button>
          }

          {AMZNsell ?
            <button onClick={() => setAMZNS(AMZNsell = false)} className='SELL'>sell</button> :
            <button onClick={() => {
              setAMZNB(AMZNbuy = false)
              setAMZNS(AMZNsell = true)
            }} className='sell'>sell</button>
          }
        </div>
    </div>
        <div className="row2">
            <div id="floated-imgs">
            <img width="35" height="35" src="https://png2.cleanpng.com/sh/33b62c4491b5a4d72aaf477987de5912/L0KzQYm3VsA5N51vjpH0aYP2gLBuTfljdV5uiARqZXywfMXrTfxwb5Cyeud8aX7og8S0gB9ve6ZxjNN3dD24coLog8Q1apI8TqtsMD65R4WBUMI2PGI6Sqo9OEC7RIS9WMU4NqFzf3==/kisspng-ibm-israel-ltd-logo-business-consultant-5b1ac44ba769c0.6748025415284808436857.png"></img>
            </div>
            <div className='names'>
              <b>IBM</b>
            </div>
            <div className='stocksvalue3'>
                 ${Stocksvalue}<br></br>
            </div>
            <div className="count">
            <form action='#'>
                <select id='number-dd' name='number'>
                    <option value=''></option>
                    <option value='one'>1</option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                </select>
            </form>
            </div>
            <div className=' button'>
        

            {IBMbuy ?
            <button onClick={() => setIBMB(IBMbuy = false)} className='BUY'>buy</button>
            :
            <button onClick={() => {
              setIBMS(IBMsell = false)
              setIBMB(IBMbuy = true)
            }} className='buy'>buy</button>
          }
          {IBMsell ?
            <button onClick={() => setIBMS(IBMsell = false)} className='SELL'>sell</button> :
            <button onClick={() => {
              setIBMB(IBMbuy = false)
              setIBMS(IBMsell = true)
            }} className='sell'>sell</button>
          }
        </div>
    </div>

        <div className="row2">
            <div id="floated-imgs">
            <img width="50" height="50" src="https://www.freepnglogos.com/uploads/microsoft-logo-small-29.png"></img>
            </div>
            <div className='names'>
              <b>MSFT</b>
            </div>
            <div className='stocksvalue4'>
                 ${Stocksvalue}<br></br>
            </div>
            <div className="count">
            <form action='#'>
                <select id='number-dd' name='number'>
                    <option value=''></option>
                    <option value='one'>1</option>
                    <option value='two'>2</option>
                    <option value='three'>3</option>
                    <option value='four'>4</option>
                </select>
            </form>
            </div>
            <div className=' button'>
        

            {MSFTbuy ?
            <button onClick={() => setMSFTB(MSFTbuy = false)} className='BUY'>buy</button>
            :
            <button onClick={() => {
              setMSFTS(MSFTsell = false)
              setMSFTB(MSFTbuy = true)
            }} className='buy'>buy</button>
          }
          {MSFTsell ?
            <button onClick={() => setMSFTS(MSFTsell = false)} className='SELL'>sell</button> :
            <button onClick={() => setMSFTS(MSFTsell = true)} className='sell'>sell</button>
          }
        </div>
    </div>
</div>
</div>
)}*/