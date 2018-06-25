import React from 'react';
import axios from 'axios';
import SelectorCheckbox from './SelectorCheckbox.jsx';

class SelectorComponent extends React.Component {
    handleChange(race_id) {
        var _this = this;
        var serverRequest = axios.get('http://192.81.218.23:8000/api/races/' + race_id)
        .then(function(result) {
            console.log(_this);
            _this.props.changeRace({type:'change_race', payload:result.data});
            _this.props.changeRace({type: 'sort_time'});
            _this.props.changeRace({type: 'add_computations'});
        });
    }
    render() {
        var _this = this
            return (
                    <div id='selector-component' className="col-md-3">
                    <h3>Race Selector</h3>
                    <form>
                    {this.props.races.map(function(race) {
                            return (
                                <SelectorCheckbox races={race} handleChange={_this.handleChange.bind(_this)} key={race.id}/>
                                   )
                            })}
                    </form>
                    </div>
                   );
    }

}

export default SelectorComponent;
