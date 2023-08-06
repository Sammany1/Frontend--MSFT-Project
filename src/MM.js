// import React from "react";
import React, { useState , useEffect } from "react";
import './MM.css';
import App from "./App.js"

export default App;
function Card2(props) {
  const value = 1222
  const availableamount = 1111
  const Stocksvalue = 2222
  const profit = +200
  const username = 'william'
  // useEffect(() => {
  //     fetch('https://create-room')
  //       .then(response => response.json())
  //       .then(json => setData((Rooms[`${code}`])))
  //       .catch(error => console.error(error));
  //   }, []);

  return (
    <div className='card'>
      <div>
        welcome <b>{username}</b>, <br></br>
        your account value is {value}$
      </div>

      <div className='bottom'>
        available amount = {availableamount}$ <br></br>
        Stocks value = {Stocksvalue}$ <br></br>
        profit = {profit}$
      </div>
    </div>)
}


const Stocksvalue = 2222

/*
function Market(props) {

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
        <div id="floated-imgs">
          <div className='appl'>
            <img width="30" height="30" src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"></img>
          </div>

          <div className='amzn'>
            <img width="50" height="50" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x480.png"></img>
          </div>
          <div className='ibmp'>
            <img width="35" height="35" src="https://png2.cleanpng.com/sh/33b62c4491b5a4d72aaf477987de5912/L0KzQYm3VsA5N51vjpH0aYP2gLBuTfljdV5uiARqZXywfMXrTfxwb5Cyeud8aX7og8S0gB9ve6ZxjNN3dD24coLog8Q1apI8TqtsMD65R4WBUMI2PGI6Sqo9OEC7RIS9WMU4NqFzf3==/kisspng-ibm-israel-ltd-logo-business-consultant-5b1ac44ba769c0.6748025415284808436857.png"></img>
          </div>

          <div className='msft'>
            <img width="50" height="50" src="https://www.freepnglogos.com/uploads/microsoft-logo-small-29.png"></img>
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
          <b>stock value</b>
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

      <>
        <div className='numstock'>
          <b>Number of stocks</b><br></br>
        </div>
        
        <div className='count1'>
        <form action='#'>
          <select id='number-dd' name='number'>
            <option value=''></option>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3</option>
            <option value='four'>4</option>
          </select>
          <div className='count2'>
            <select id='number-dd' name='number'>
              <option value=''></option>
              <option value='one'>1</option>
              <option value='two'>2</option>
              <option value='three'>3</option>
              <option value='four'>4</option>
            </select>
          </div>
          <div className='count3'>
            <select id='number-dd' name='number'>
              <option value=''></option>
              <option value='one'>1</option>
              <option value='two'>2</option>
              <option value='three'>3</option>
              <option value='four'>4</option>
            </select>
          </div>
          <div className='count4'>
            <select id='number-dd' name='number'>
              <option value=''></option>
              <option value='one'>1</option>
              <option value='two'>2</option>
              <option value='three'>3</option>
              <option value='four'>4</option>
            </select>
          </div>
        </form>
      </div></>
      <div className=' button'>
        <div className='APPL'>

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
        <div className='AMZN'>
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
        <div className='IBM'>
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
        <div className='MSFT'>
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
  )

}*/
function Leaderboard(_props) {
  return (
    <body>
      <main>
        <div className='container'>
          <div id="header">
            <h1>Ranking</h1>
          </div>
          <div id="leaderboard">
            <div class="ribbon"></div>
            <table>
              <tr>
                <td class="number">1</td>
                <td class="name">player 1</td>
                <td class="points">
                  258.244 <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" />
                </td>
              </tr>
              <tr>
                <td class="number">2</td>
                <td class="name">player 2</td>
                <td class="points">258.242</td>
              </tr>
              <tr>
                <td class="number">3</td>
                <td class="name">player 3</td>
                <td class="points">258.223</td>
              </tr>
              <tr>
                <td class="number">4</td>
                <td class="name">player 4</td>
                <td class="points">258.212</td>
              </tr>
            </table>

          </div></div>
      </main>
    </body>

  )
}

function Timer2(props){



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
      <h1>Time left: {count}</h1>
    </div>
  );
};