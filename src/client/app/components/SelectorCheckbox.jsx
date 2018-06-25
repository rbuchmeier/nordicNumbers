import React from 'react';

class SelectorCheckbox extends React.Component {
    render () {
        var _this = this;
        var race = _this.props.races;
        return (
            <label>
                <input type="checkbox" name="races" onClick={() => _this.props.handleChange(race._id)}/>{race.raceDate} {race.location} {race.gender} {race.skill} {race.distance}
            </label>
       )
    }
}

export default SelectorCheckbox;
