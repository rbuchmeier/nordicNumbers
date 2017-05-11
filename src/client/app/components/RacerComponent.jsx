import React from 'react';
var moment = require('moment');

var RacerComponent = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div id='racers-component'>
        <h3>Racers View</h3>
        <ul>
            {
                this.props.racers.map(function(racer) {
                    return (
                        <li key={racer.time}>
                            {racer.first} {racer.last} ---
                            {moment('2017-01-01').startOf('day').seconds(racer.time).format('H:mm:ss')}
                        </li>
                    )
                })
            }
        </ul>
      </div>
    );
  }
});

export default RacerComponent;
