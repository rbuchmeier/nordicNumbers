import React from 'react';
import axios from 'axios';

class AnalysisComponent extends React.Component {
    render() {
        var _this = this
        return (
            <div id='analysis-component' className="col-md-12">
                <h3>Analysis</h3>
                <p>{_this.props.data.race}</p>
                <p>{_this.props.data.person}</p>
                <p>{_this.props.data.result}</p>
            </div>
        );
    }
}

export default AnalysisComponent;
