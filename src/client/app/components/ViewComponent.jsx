import React from 'react';
var moment = require('moment');

class ViewComponent extends React.Component{
  render() {
    return (
      <div className='rounded col-md-9' id='view-component'>
        <h3>race view</h3>
      <div className="row" key="label"><em>
            <div className="col-md-2">place</div>
            <div className="col-md-3">name</div>
            <div className="col-md-1">grade</div>
            <div className="col-md-2">time</div>
            <div className="col-md-2">team</div>
            <div className="col-md-2">% Back</div>
      </em></div>
            {this.props.race.racers.map(function(racer, i) {
                return (
                    <div className="row" key={racers.first + racers.last + racers.time}>
                   <div className="col-md-2"> {i+1}</div>
                   <div className="col-md-3"> {racers.first} {racers.last}</div>
		   <div className="col-md-1">{racers.grade}</div>
                   <div className="col-md-2">{moment('2017-01-01').startOf('day').seconds(racer.time).format('H:mm:ss')}</div>
                   <div className="col-md-2">{racers.team}</div>
                   <div className="col-md-2">{racers.percent_back} %</div>
                    </div>
                );
            })}
      </div>
    );
  }
};

export default ViewComponent;
