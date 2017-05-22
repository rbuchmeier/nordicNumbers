import React from 'react';
import axios from 'axios';

class SelectorComponent extends React.Component {
    handleChange(race_id) {
        this.serverRequest = axios.get('http://192.81.218.23:3000/api/races/' + race_id)
        .then(function(result) {
            console.log(result.data);
        });
    }
    render() {
        var _this = this
            return (
                    <div id='selector-component'>
                    <h3>Race Selector</h3>
                    <form>
                    {_this.props.races.map(function(race) {
                            return (
                                    <div key={race._id}>
                                    <label>
                                    <input type="radio" name="races" onClick={() => _this.handleChange(race._id)}/>{race.raceDate} {race.location} {race.gender} {race.skill} {race.distance}
                                    </label>
                                    </div>
                                   )
                            })}
                    </form>
                    </div>
                   );
    }

}

export default SelectorComponent;
