import React from 'react';
import {HeroStyles} from './HeroStyles';
import Dogecoin from './Dogecoin';


function Final () {
    return ( 
        <HeroStyles>
            {/* <h1>This is the header</h1> */}
            <div className="boxwrap">
                <div className="PriceBox">
                    <div className="Price">
                        <div className= "Name"> Doge: <Dogecoin /> </div>
                        {/* <div className="CurrentPrice"> $ <Dogecoin /></div> */}
                    </div>
                        {/* <div className="CurrentPrice">  $0.0708</div> */}
                    <div className="Data">
                        <div>Volume: (vol)</div>
                        <div>Market cap: (MC)</div>
                        <div>24 hr change: sdsdf</div>
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