import React from 'react';
var axios = require('axios');
var moment = require('moment');

var ViewComponent = React.createClass({
  render: function() {
    return (
      <div id='view-component'>
        <h3>Race View</h3>
        <p>location: {this.props.race.location}</p>
        <p>skill: {this.props.race.skill}</p>
        <p>ID: {this.props.race._id}</p>
        <ul>
            {this.props.race.racers.map(function(racer) {
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
