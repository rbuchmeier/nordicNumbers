import React from 'react';

class SelectorComponent extends React.Component {
  render() {
    return (
      <div id='selector-component'>
        <p>Race Selector</p>
        <form>
           <input type="radio" name="race"/>Casper 2017<br/>
           <input type="radio" name="race"/>Laramie 2017
        </form>
      </div>
    );
  }

}

export default SelectorComponent;
