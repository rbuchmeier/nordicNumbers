import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import SkiersComponent from './components/SkiersComponent.jsx';
import { skier_reducer } from './reducers/skier_reducer.js';

const store = createStore(skier_reducer);

function mapStateToProps(state) {
    return {
            skiers: state.skiers,
            race: state.race,
            races: state.races
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeRace: (change_race_action) => dispatch(change_race_action),
        loadData: (load_data_action) => dispatch(load_data_action)
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(SkiersComponent)

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('skiers')
);

