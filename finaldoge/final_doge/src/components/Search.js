import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Final from './Final';   


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


function Check() {
  const [coins, setCoins] = useState([])  
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false')

        .then(res => {
            setCoins(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
         

    }, []); 
    const Coins = [];
    
    return (

     

        })
 
        


    );

}


export default Check;