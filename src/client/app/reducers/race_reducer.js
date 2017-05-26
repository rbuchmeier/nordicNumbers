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

export { race_reducer }
