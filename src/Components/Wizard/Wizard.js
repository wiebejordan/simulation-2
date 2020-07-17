import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Wizard extends Component{
  constructor(props){
    super(props);

    this.state= {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
    }
  }

  handleInput= (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <div>
        <input
        name='name'
        value={this.state.name}
        onChange={e => this.handleInput(e)}
        />

        <input
        name='address'
        value={this.state.address}
        onChange={e => this.handleInput(e)}
        />

        <input
        name='city'
        value={this.state.city}
        onChange={e => this.handleInput(e)}
        />

        <input
        name='state'
        value={this.state.state}
        onChange={e => this.handleInput(e)}
        />  

        <input
        name='zipcode'
        value={this.state.zipcode}
        onChange={e => this.handleInput(e)}
        />  

        <Link to='/'>
        <button>Cancel</button>
        </Link>
      </div>
    )
  }


}

export default Wizard;
