import SelectorComponent from '../app/components/SelectorComponent.jsx';
import SelectorCheckbox from '../app/components/SelectorCheckbox.jsx';
import { shallow } from 'enzyme';
import React from 'react';

describe ('<SelectorComponent />', () => {
    it('should render three <SelectorCheckbox /> components', () => {
        const races = [{_id: 1}, {_id: 2}, {_id: 3}];
        const changeRace = jest.fn();
        const wrapper = shallow(<SelectorComponent races={races} changeRace={changeRace}/>);
        expect(wrapper.find(SelectorCheckbox)).toHaveLength(3);
    });
});
