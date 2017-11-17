import React from 'react';
var moment = require('moment');

class ViewComponent extends React.Component{
  render() {
    return (
      <div className='rounded col-md-9' id='view-component'>
        <h3>race view</h3>
      <div classname="row" key="label"><em>
            <div classname="col-md-2">place</div>
            <div classname="col-md-3">name</div>
            <div classname="col-md-1">grade</div>
            <div classname="col-md-2">time</div>
            <div classname="col-md-2">team</div>
            <div className="col-md-2">% Back</div>
      </em></div>
            {this.props.race.racers.map(function(racer, i) {
                return (
                    <div className="row" key={racer.first + racer.last + racer.time}>
                   <div className="col-md-2"> {i+1}</div>
                   <div className="col-md-3"> {racer.first} {racer.last}</div>
		   <div className="col-md-1">{racer.grade}</div>
                   <div className="col-md-2">{moment('2017-01-01').startOf('day').seconds(racer.time).format('H:mm:ss')}</div>
                   <div className="col-md-2">{racer.team}</div>
                   <div className="col-md-2">{racer.percent_back} %</div>
                    </div>
                );
            })}
      </div>
    );
  }
};

export default ViewComponent;
