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
