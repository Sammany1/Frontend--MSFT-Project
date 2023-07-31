import React from "react";
import './card.css';



export default function Card() {

    const sample = require('./temp.json');
    console.log(sample);
    
    
    // console.log(data)    
    
    return (
        <div className="card">
            <div className="top_text_header" >
               Welcome {sample.users.user} <br/>
            </div>
            <div className="top_text_sub">
                your account value is
                
            </div>
             
            <div className="main_number">
            ${sample.users.random_id}
            </div>
                
                
               
            
        </div>
    );
}