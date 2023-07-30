import React from "react";
import './card.css';



export default function Card() {

    const sample = require('./temp.json');
    console.log(sample);
    
    
    // console.log(data)    
    
    return (
        <div className="card">
            <div className="top_text"  >
            {/* imported from JSON file */}
                Welcome {sample.users.site} <br />
                
                
                your account value is 
                <div className="main_number">
                
                3000
                
                </div>
                </div>
                
                
               
            
        </div>
    );
}