import React from 'react';

class SelectorComponent extends React.Component {
  render() {
    return (
      <div id='selector-component'>
        <p>Race Selector</p>
          <label>
           <input type="radio" name="Casper 2017">Casper 2017</input>
           <input type="radio" name="Laramie 2017">Laramie 2017</input>
          </label>
      </div>
    );
  }

}

export default SelectorComponent;
