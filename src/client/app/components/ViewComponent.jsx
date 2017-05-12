import React from 'react';
var axios = require('axios');
var moment = require('moment');

var ViewComponent = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div id='view-component'>
        <h3>Race View</h3>
        <p>location: {this.props.races.location}</p>
        <p>skill: {this.props.races.skill}</p>
        <ul>
            {this.props.races.racers.map(function(racer) {
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
