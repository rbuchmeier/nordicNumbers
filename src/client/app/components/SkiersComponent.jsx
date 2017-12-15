import React from 'react';
import axios from 'axios';
import SelectorComponent from './SelectorComponent.jsx'
import PeopleComponent from './PeopleComponent.jsx'
import AnalysisComponent from './AnalysisComponent.jsx'

class SkiersComponent extends React.Component{
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
        _this.props.loadData({type: 'load_data', race: 'blah', person: '123', result: 100});
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
                        <PeopleComponent />
                        <SelectorComponent races={_this.props.races} changeRace={_this.props.changeRace} />
                    </div>
                    <div className="row">
                        <AnalysisComponent data={_this.props.skiers} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SkiersComponent;

