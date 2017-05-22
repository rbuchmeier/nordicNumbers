import React from 'react';

class FilterComponent extends React.Component {

  render() {
    return (
      <div id='filter-component'>
        <h3>Race Filter</h3>
      <div class="row">
	<div class"col-md-4">
		Gender:&nbsp
		<select name="genders">
			<option value="boys">Boys</option>
			<option value="girls">Girls</option>
		</select>
	</div>
	<div class"col-md-4">
		Skill:&nbsp
		<select name="skill">
			<option value="skate">Skate</option>
			<option value="classic">Classic</option>
		</select>
	</div>
	<div class"col-md-4">
		Season:&nbsp
		<select name="season">
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
