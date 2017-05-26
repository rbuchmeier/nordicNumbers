import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './components/AppComponent.jsx';
import { race_reducer } from './reducers/race_reducer.js';

/*
var race_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            race: {racers:[]},
            races: []
        };
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'change_race':
            newState = Object.assign({}, state, {race: action.payload});
            break;
        case 'load_races':
            newState = Object.assign({}, state, {races: action.payload});
            break;
        case 'sort_time':
            var results = state.race.racers;
            results.sort(function (a, b) {
                return a.time - b.time;
            });
            const newRace = Object.assign({}, state.race, {racers: results});
            newState = Object.assign({}, state, {race: newRace});
    }
    return newState;
}
*/

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

