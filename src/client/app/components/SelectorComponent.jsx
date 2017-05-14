import React from 'react';

class SelectorComponent extends React.Component {
  render() {
    return (
      <div id='selector-component'>
        <h3>Race Selector</h3>
        <form>
            {this.props.races.map(function(race) {
                return (
                    <div>
                        <label>
                            <input type="radio" name="races" key={race._id}/>{race.raceDate} {race.location} {race.gender} {race.skill} {race.distance}
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
