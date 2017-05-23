import React from 'react';
var moment = require('moment');

var ViewComponent = React.createClass({
  render: function() {
    return (
      <div className='rounded' id='view-component'>
        <h3>Race View</h3>
      <div className="row" key="label"><em>
            <div className="col-md-3">Name</div>
            <div className="col-md-3">Grade</div>
            <div className="col-md-3">Time</div>
            <div className="col-md-3">Team</div>
      </em></div>
            {this.props.race.racers.map(function(racer) {
                return (
                    <div className="row" key={racer.first + racer.last + racer.time}>
                   <div className="col-md-3"> {racer.first} {racer.last}</div>
		   <div className="col-md-3">{racer.grade}</div>
                   <div className="col-md-3">{moment('2017-01-01').startOf('day').seconds(racer.time).format('H:mm:ss')}</div>
                   <div className="col-md-3">{racer.team}</div>
                    </div>
                );
            })}
      </div>
    );
  }
});

export default ViewComponent;
