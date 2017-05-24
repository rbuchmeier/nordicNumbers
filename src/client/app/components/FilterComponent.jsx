import React from 'react';
import axios from 'axios';

class FilterComponent extends React.Component {
  handleChange(type, value) {
        var _this = this;
        this.serverRequest = axios.get('http://192.81.218.23:3000/api/races/?' + type + '=' + value)
        .then(function(result) {
            _this.props.loadRaces({type: 'load_races', payload: result.data});
        });
    }
  render() {
    var _this = this;
    return (
      <div id='filter-component'>
        <h3>Race Filter</h3>
      <div className="row">
	<div className="col-md-4">
		Gender:&nbsp;
		<select name="gender" onChange={() => _this.handleChange(this.value)} disabled>
			<option value=""></option>
			<option value="boys">Boys</option>
			<option value="girls">Girls</option>
		</select>
	</div>
	<div className="col-md-4">
		Skill:&nbsp;
		<select name="skill" onChange={(e) => _this.handleChange('skill', e.target.value)}>
			<option value=""></option>
			<option value="Skate">Skate</option>
			<option value="Classic">Classic</option>
		</select>
	</div>
	<div className="col-md-4">
		Season:&nbsp;
		<select name="season" disabled>
			<option value="16_17">16/17</option>
			<option value="15_16">15/16</option>
		</select>
	</div>
	</div>
	</div>
    );
  }

}

export default FilterComponent;
