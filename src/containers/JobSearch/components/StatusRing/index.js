import React, {Component} from 'react';
import * as d3 from 'd3';


//Does not function properly - will solve later


class StatusRing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: undefined
    }
  }

  componentDidMount() {
    if(!this.state.loaded) {
      d3.select('#' + this.props.id).append('div').text(4)
      
      this.setState({loaded: true});
    }
  }

  render() {
    return (
      <div>
        <div id={this.props.id} style={{width: 100, height: 100}}></div>
      </div>
    );
    
  }
}

export default StatusRing;