import React from 'react';

class SelectorComponent extends React.Component {
  render() {
    return (
      <div id='selector-component'>
        <h3>Race Selector</h3>
        <form>
           <input type="radio" name="race"/>Casper 2017<br/>
           <input type="radio" name="race"/>Laramie 2017
        </form>
      </div>
    );
  }

}

export default SelectorComponent;
