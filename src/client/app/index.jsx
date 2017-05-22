import React from 'react';
var axios = require('axios');
var moment = require('moment');
import {render} from 'react-dom';
import FilterComponent from './components/FilterComponent.jsx'
import SelectorComponent from './components/SelectorComponent.jsx'
import ViewComponent from './components/ViewComponent.jsx'

var App = React.createClass({
  getInitialState: function() {
    return {
        race: {racers: []},
        races: [],
        racers: []
    }
  },
  componentDidMount: function() {
    var _this = this;
    this.serverRequest = axios.get('http://192.81.218.23:3000/api/races')
        .then(function(result) {
            _this.setState({
                races: result.data,
                race: result.data[0],
                racers: result.data[0].racers
            });
        })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    return (
	<div>
      <div className='jumbotron'>
        <FilterComponent />
        <SelectorComponent races={this.state.races} />
        <ViewComponent race={this.state.race} />
      </div>
	</div>
    );
  }
})

render(<App/>, document.getElementById('app'));
