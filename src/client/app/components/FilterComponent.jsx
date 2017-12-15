import React from 'react';
import axios from 'axios';

class FilterComponent extends React.Component {
  handleChange(type, value) {
        var _this = this;
        this.serverRequest = axios.get('http://192.81.218.23:8000/api/races/?' + type + '=' + value)
        .then(function(result) {
            _this.props.loadRaces({type: 'load_races', payload: result.data});
        }).catch(error => {
	    	console.log('Failed to fetch races from endpoint');
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
		<select name="gender" onChange={(e) => _this.handleChange('gender', e.target.value)}>
			<option value=""></option>
			<option value="Boys">Boys</option>
			<option value="Girls">Girls</option>
		</select>
	</div>
	<div className="col-md-4">
		Skill:&nbsp;
		<select name="skill" onChange={(e) => _this.handleChange('class', e.target.value)}>
			<option value=""></option>
			<option value="skate">Skate</option>
			<option value="classic">Classic</option>
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
