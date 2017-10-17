import React from 'react';
import axios from 'axios';
import FilterComponent from './FilterComponent.jsx'
import SelectorComponent from './SelectorComponent.jsx'
import ViewComponent from './ViewComponent.jsx'

class App extends React.Component{
  componentDidMount() {
    var _this = this;
    _this.serverRequest = axios.get('http://192.81.218.23:8000/api/races')
    .then(function(result) {
        _this.props.loadRaces({type: 'load_races', payload: result.data});
        _this.serverRequest = axios.get('http://192.81.218.23:8000/api/races/' + result.data[0].id)
        .then(function(single_result) {
            _this.props.changeRace({type: 'change_race', payload: single_result.data[0]});
            _this.props.changeRace({type: 'sort_time'});
            _this.props.changeRace({type: 'add_computations'});
        })
    })
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    var _this = this;
    return (
    <div>
      <div className='jumbotron'>
	 <div className="row">
        <FilterComponent loadRaces={_this.props.loadRaces}/>
	 </div>
	 <div className="row">
        <SelectorComponent races={_this.props.races} changeRace={_this.props.changeRace}/>
        <ViewComponent race={_this.props.race} />
	 </div>
      </div>
    </div>
    );
  }
}

export default App;
