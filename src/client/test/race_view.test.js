import React from 'react';
import { shallow } from 'enzyme';
import ViewComponent from '../app/components/ViewComponent';

var initial_state = {
    race: {racers:[]},
    races: []
};
var loads_components = function () {
    test('Should load component', () => {
        const wrapper = shallow(<ViewComponent race={initial_state.race}/>);
        expect(wrapper.type()).toEqual('div');
    });
};
loads_components();
