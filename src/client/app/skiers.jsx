import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import SkiersComponent from './components/SkiersComponent.jsx';
import { race_reducer } from './reducers/race_reducer.js';

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

const Container = connect(mapStateToProps, mapDispatchToProps)(SkiersComponent)

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('skiers')
);

