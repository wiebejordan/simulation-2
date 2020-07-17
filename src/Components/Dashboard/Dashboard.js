import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Dashboard extends Component{
  constructor(props){
    super(props);

    this.state = {
        houses: []
    }
  }

  componentDidMount(){
    this.getHouses();
  }

  getHouses = () => {
    axios.get('/api/houses')
    .then(res => this.setState({houses: res.data}))
    .catch(err => console.log(err));
  }

  render(){
      const mappedHouses = this.state.houses.map((house, i) => (
        <div key={i}>
          <img src={house.img}/>
          <p>{house.name}</p>
          <p>{house.address}</p>
          <p>{house.city}</p>
          <p>{house.state}</p>
          <p>{house.zipcode}</p>
        </div>
      ));

    return(
      <div>
        Dashboard
        <House/>
        {mappedHouses}
        <Link to='/wizard'>
        <button>Add New Property</button>
        </Link>
      </div>
    )
  }


}

export default Dashboard;