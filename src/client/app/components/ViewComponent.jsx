import React from 'react';
var moment = require('moment');

class ViewComponent extends React.Component{
  render() {
    return (
      <div className='rounded col-md-9' id='view-component'>
        <h3>race view</h3>
      <div className="row" key="label"><em>
            <div className="col-md-2">Location</div>
            <div className="col-md-3">Name</div>
            <div className="col-md-1">Grade</div>
            <div className="col-md-2">Time</div>
            <div className="col-md-2">Team</div>
            <div className="col-md-2">% Back</div>
      </em></div>
            {this.props.race.racers.map(function(racer, i) {
                return (
                    <div className="row" key={racer.first + racers.last + racers.time}>
                      <div className="col-md-2"> {i+1}</div>
                      <div className="col-md-1">{racer.location}</div>
                      <div className="col-md-2"> {racer.first} {racers.last}</div>
		                  <div className="col-md-1">{racer.grade}</div>
                      <div className="col-md-2">{moment('2017-01-01').startOf('day').seconds(racer.time).format('H:mm:ss')}</div>
                      <div className="col-md-2">{racer.level}</div>
                      <div className="col-md-2">{racer.percent_back} %</div>
                    </div>
                );
            })}
      </div>
    );
  }
};

export default ViewComponent;
