import React, {useState, useEffect} from 'react';
import {HeroStyles} from './HeroStyles';
import Dogecoin from './Dogecoin';
import axios from 'axios';


function Final () {

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    const [coins, setCoins] = useState()

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setCoins(response.data)
            
        })

    }, [url])



    return ( 
        <HeroStyles>
            {/* <h1></h1> */}
            <div className="boxwrap">
                <div className="PriceBox">
                    <div className="Price">
                        <div className= "Name"> Doge: </div>
                        {/* <div className="CurrentPrice"> $ <Dogecoin /></div> */}
                    </div>
                        {/* <div className="CurrentPrice">  $0.0708</div> */}
                    <div className="Data">
                    
                        <div>volume:</div>
                        <div>24 hr change:</div>
                        <div>1 year change: efwef</div>
                        <div>Days range: wfsdfsdfsdfsf</div>
                    </div>
                </div>
                <div className="Trending">
                    <div className="head">Trending</div>
                    <div className="Trend"></div>
                </div>
                

            </div>
        </HeroStyles>




    )


};

export default Final;