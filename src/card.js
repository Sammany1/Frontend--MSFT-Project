import React from "react";
import './card.css';



export default function Card() {

    const sample = require('./temp.json');
    console.log(sample);
    
    
    // console.log(data)    
    
    return (
    <div>
        <div className="profile_card">
            <div className="left">
            <div className="top_text">
            <div className="top_text_header" >
               Welcome {sample.users.user} <br/>
            </div>
            <div className="top_text_sub">
                your account value is
            </div>
            </div>
            <div className="main_number">
                ${sample.users.random_id} 
            </div>
            </div>
            <div className="right_text"> 
                Available Amount = $240 <br/>
                Stocks Value = $1090.29 <br/> 
                Profit = + $240
            </div>
        </div>


        <div className="owned_card">
            <div className="row">
                <div className="name">
                    MSFT
                </div> 
                <div className="status">
                    +9.77%
                </div>
                <div className="price">
                    $681.79
                </div>
                <div className="owned">
                    $10000$
                </div>
                
            </div>
            <div className="row">
                <div className="name">
                    AMZN
                </div> 
                <div className="status">
                    +9.77%
                </div>
                <div className="price">
                    $681.79
                </div>
                <div className="owned">
                    $10000$
                </div>
                
            </div>
           
           
           {/* AMZN <br/>
            AAPL <br/> 
            IBM  <br/>
  */}

        </div>
    </div>
    );
}