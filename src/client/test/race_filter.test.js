import React from 'react';
import { shallow } from 'enzyme';
import FilterComponent from '../app/components/FilterComponent';

var initial_state = {
    race: {racers:[]},
    races: []
};
var loads_components = function () {
    test('Should load component', () => {
        const wrapper = shallow(<FilterComponent races={initial_state.races}/>);
        expect(wrapper.type()).toEqual('div');
    });
};
loads_components();

