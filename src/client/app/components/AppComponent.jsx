import React from 'react';
import axios from 'axios';
import FilterComponent from './FilterComponent.jsx'
import SelectorComponent from './SelectorComponent.jsx'
import ViewComponent from './ViewComponent.jsx'

var App = React.createClass({
  componentDidMount: function() {
    var _this = this;
    this.serverRequest = axios.get('http://192.81.218.23:3000/api/races')
        .then(function(result) {
            _this.props.loadRaces({type: 'load_races', payload: result.data});
            _this.props.changeRace({type: 'change_race', payload: result.data[0]});
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
    <div>
      <div className='jumbotron'>
	 <div className="row">
        <FilterComponent loadRaces={this.props.loadRaces}/>
	 </div>
	 <div className="row">
        <SelectorComponent races={this.props.races} changeRace={this.props.changeRace}/>
        <ViewComponent race={this.props.race} />
	 </div>
      </div>
    </div>
    );
  }
})

export default App;
