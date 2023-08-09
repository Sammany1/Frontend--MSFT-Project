function MSFTL_Buy_Sell_Amount(){
        
        const Stocksvalue = 99;
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