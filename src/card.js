import React from "react";
import './card.css';



export default function Card() {

    const sample = require('./temp.json');
    console.log(sample);
    
    
    // console.log(data)    
    
    return (
        <div className="card">
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
    );
}