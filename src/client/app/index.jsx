import React from 'react';
import ReactDOM from 'react-dom';
var axios = require('axios');
var moment = require('moment');
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import FilterComponent from './components/FilterComponent.jsx'
import SelectorComponent from './components/SelectorComponent.jsx'
import ViewComponent from './components/ViewComponent.jsx'

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
        <FilterComponent />
        <SelectorComponent races={this.props.races} changeRace={this.props.changeRace}/>
        <ViewComponent race={this.props.race} />
      </div>
	</div>
    );
  }
})

var initialState = {
    data: {
        race: {racers:[]},
        races: []
    }
}

var race_reducer = function(state, action) {
    if (state == undefined) {
        return initialState.data;
    }
    var newState = state;
    switch(action.type) {
        case 'change_race':
            newState = Object.assign({}, state, {race: action.payload});
            break;
        case 'load_races':
            newState = Object.assign({}, state, {races: action.payload});
            break;
    }
    return newState;
}

const store = createStore(race_reducer);

function mapStateToProps(state) {
    return {
        race: state.race,
        races: state.races
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeRace: (change_race_action) => dispatch(change_race_action),
        loadRaces: (load_races_action) => dispatch(load_races_action)
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('app')
);

