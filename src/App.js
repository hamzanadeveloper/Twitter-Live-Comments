import React from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timestamp: 'Nothing set yet.'
    }

    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  render() {
    return (
        <div className="App">
          <p className="App-intro">
            This is the timer value: {this.state.timestamp}
          </p>
        </div>
    );
  }
}

