var skier_reducer = function(state, action) {
    if (state == undefined) {
        var data = {
            race: {racers:[]},
            races: [],
            skiers: {}
        };
        return data;
    }
    var newState = state;
    switch(action.type) {
        case 'load_data':
            newState = Object.assign({}, state, {skiers: {
                race: action.race,
                person: action.person,
                result: action.result
            }});
            break;
    }
    return newState;
}

export { skier_reducer }

