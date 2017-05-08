import React from 'react';

class SelectorComponent extends React.Component {
  render() {
    return (
      <div id='selector-component'>
        <p>Race Selector</p>
        <form>
           <input type="radio" name="Casper_2017" />Casper 2017<br/>
           <input type="radio" name="Laramie_2017" />Laramie 2017
        </form>
      </div>
    );
  }

}

export default SelectorComponent;
