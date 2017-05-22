import React from 'react';
var moment = require('moment');

var ViewComponent = React.createClass({
  render: function() {
    return (
      <div id='view-component'>
        <h3>Race View</h3>
<div>
        <p>location: {this.props.race.location}</p>
        <p>skill: {this.props.race.skill}</p>
        <p>ID: {this.props.race._id}</p>
</div>
      <div class="row" key={"racers"+this.props.race._id}><em>Name (Grade) --- Time | Team</em></div>
            {this.props.race.racers.map(function(racer) {
                return (
                    <div class="row" key={racer.first + racer.last + racer.time}>
                   <div class="col-md-3"> {racer.first} {racer.last}</div>
		   <div class="col-md-3">{racer.grade}</div>
                   <div class="col-md-3">{moment('2017-01-01').startOf('day').seconds(racer.time).format('H:mm:ss')}</div>
                   <div class="col-md-3'>{racer.team}</div>
                    </div>
                );
            })}
      </div>
    );
  }
});

export default ViewComponent;
