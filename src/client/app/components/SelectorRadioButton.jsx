import React from 'react';

class SelectorRadioButton extends React.Component {
    render () {
        var race = this.props.race;
        var handleChange = this.props.handleChange
        return (
            <label>
                <input type="radio" name="races" onClick={() => handleChange(race._id)}/>{race.raceDate} {race.location} {race.gender} {race.skill} {race.distance}
            </label>
       )
    }
}

export default SelectorRadioButton
