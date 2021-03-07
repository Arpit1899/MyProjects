import React from 'react';

import axios from 'axios';


export default class DogeCoin extends React.Component {
  intervalID;
  state = {
    coins: []
  }


  getData = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h').then(response => {
        // this.setState({coins: [{'doge_coin': response.data.price}]})
        const data = response.data
        const need = data.map((x => {
          if (x["id"]=="chainlink") {
            console.log(x)
            this.setState({ coins: [x] })
          }
        }))
    })

    this.intervalID = setTimeout(this.getData.bind(this),1000);
    


  }

  async componentDidMount(){
    await this.getData();
  }


  componentWillMount() {
    clearTimeout(this.intervalID);
  }
  


  
  
  render() {
    return (
      <div>
        {this.state.coins.map(el => (
          <div>
            <div> {el.data}</div>
             
          </div>
        ))}
      </div>
    );
  }
}
