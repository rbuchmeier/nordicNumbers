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
            break;
        case 'add_computations':
            const race_copy = Object.assign({}, state.race);
            var first_time = race_copy.racers[0].time;
            for (var i in race_copy.racers) {
                race_copy.racers[i].percent_back = ((race_copy.racers[i].time - first_time) / first_time * 100).toFixed(2);
            }
            newState = Object.assign({}, state, {race: race_copy});
    }
    return newState;
}

export { race_reducer }
