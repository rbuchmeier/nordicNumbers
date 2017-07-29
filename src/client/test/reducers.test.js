import { race_reducer } from '../app/reducers/race_reducer'
var change_race_tester = function () {
    var change_race_action = {
        type: 'change_race',
        payload: {racers:[{first:'foo'}]}
    }

    var given_state = {
        race: {racers:[{first:'baz'}]},
        races: []
    }

    var expected_state = {
        race: {racers:[{first:'foo'}]},
        races: []
    }
    test('Change Race Reducer Test', () => {
        expect(race_reducer(given_state, change_race_action)).toEqual(expected_state);
    });
};
change_race_tester();

var change_race_tester = function () {
    var load_races_action = {
        type: 'load_races',
        payload: [
        {location:'Casper'}, {location:'Lander'}
        ]
    }
    var given_state = {
        race: {racers:[{first:'baz'}]},
        races: [
        {location:'Casper'}, {location:'Laramie'}
        ]
    }
    var expected_state = {
        race: {racers:[{first:'baz'}]},
        races: [
        {location:'Casper'}, {location:'Lander'}
        ]
    }

    test('Load Races Reducer Test', () => {
        expect(race_reducer(given_state, load_races_action)).toEqual(expected_state);
    });
};
change_race_tester();

var sort_races_tester = function () {
    var sort_results_action = {
        type: 'sort_time'
    }
    var given_state = {
        race: {
                  racers: [{time: 960}, {time: 900}, {time: 1000}]
        },
        races: {}
    }
    var expected_state = {
        race: {
                  racers: [{time: 900}, {time: 960}, {time: 1000}]
        },
        races: {}
    }
    test('Sort Time Reducer Test', () => {
        expect(race_reducer(given_state, sort_results_action)).toEqual(expected_state);
    });
};
sort_races_tester();

var percent_back_tester = function () {
    var add_comp_action = {
        type: 'add_computations'
    }
    var given_state = {
        race: {
                  racers: [{time: 1000}, {time: 1100}, {time: 1200}]
        },
        races: {}
    }
    var expected_state = {
        race: {
                  racers: [{time: 1000, percent_back: 0}, {time: 1100, percent_back: 10}, {time: 1200, percent_back: 20}]
        },
        races: {}
    }
    test('Percent Back Reducer Test', () => {
        expect(race_reducer(given_state, add_comp_action)).toEqual(expected_state);
    });
};
percent_back_tester();
