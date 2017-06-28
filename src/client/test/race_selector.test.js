import React from 'react';
import { shallow } from 'enzyme';
import SelectorComponent from '../app/components/SelectorComponent';

var initial_state = {
    race: {racers:[]},
    races: [],
    change_race: () => {}
};
var loads_components = function () {
    test('Should load component', () => {
        const wrapper = shallow(<SelectorComponent races={initial_state.races} change_race={initial_state.change_race}/>);
        expect(wrapper.type()).toEqual('div');
    });
};
loads_components();
