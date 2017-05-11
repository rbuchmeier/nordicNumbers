import React from 'react';

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
                        <li key={racer.time}>{racer.first} {racer.last}</li>
                    )
                })
            }
        </ul>
      </div>
    );
  }
});

export default RacerComponent;
