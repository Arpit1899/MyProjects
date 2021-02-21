import React from 'react';

import axios from 'axios';


export default class DogeCoin extends React.Component {
  intervalID;
  state = {
    coins: []
  }


  getData = () => {
    axios.get('http://127.0.0.1:5000/doge_price').then(response => {
        this.setState({coins: [{'doge_coin': response.data.price}]})
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
            <div class="CurrentPrice"> {el.doge_coin}</div>
             
          </div>
        ))}
      </div>
    );
  }
}
