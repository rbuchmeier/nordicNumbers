import React from 'react';
var axios = require('axios');
var moment = require('moment');

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
        <ul>
            {this.state.racers.map(function(racer) {
                return (
                    <li key={racer.first + racer.last + racer.time}>
                        {racer.first} {racer.last} ({racer.grade}) ---&nbsp;
                        {moment('2017-01-01').startOf('day').seconds(racer.time).format('H:mm:ss')} |&nbsp;
                        {racer.team}
                    </li>
                );
            })}
        </ul>
      </div>
    );
  }
});

export default ViewComponent;
