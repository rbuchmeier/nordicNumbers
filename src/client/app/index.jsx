import React from 'react';
import {render} from 'react-dom';
import FilterComponent from './components/FilterComponent.jsx'
import SelectorComponent from './components/SelectorComponent.jsx'
import ViewComponent from './components/ViewComponent.jsx'

class App extends React.Component {
  render () {
    return (
	<div>
      <div className='jumbotron'>
        <FilterComponent />
        <SelectorComponent />
        <ViewComponent />
      </div>
	</div>
    );
  }
}


render(<App/>, document.getElementById('app'));
