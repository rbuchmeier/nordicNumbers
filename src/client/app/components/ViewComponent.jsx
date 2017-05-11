import React from 'react';
var axios = require('axios');
import RacerComponent from './RacerComponent.jsx';

var ViewComponent = React.createClass({
  getInitialState: function() {
    return {
        races: [],
        racers: []
    }
  },
  componentDidMount: function() {
    var _this = this;
    this.serverRequest = axios.get('http://192.81.218.23:3000/api/races')
        .then(function(result) {
            _this.setState({
                races: result.data[0],
                racers: result.data[0].racers
            });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
      <div id='view-component'>
        <h3>Race View</h3>
        <p>location: {this.state.races.location}</p>
        <p>skill: {this.state.races.skill}</p>
        <RacerComponent racers={this.state.racers}/>
      </div>
    );
  }
});

export default ViewComponent;
