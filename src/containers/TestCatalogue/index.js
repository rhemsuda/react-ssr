import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import SkillTestCatalogue from './SkillTestCatalogue'
import StartOCEANTest from './StartOCEANTest'
import PanelSwitcher from './components/PanelSwitcher'
import requireAuth from '../_hocs/RequireAuth';

class TestCatalogue extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTestPanel: 'skill'
    }

    this.setSelectedPanel = this.setSelectedPanel.bind(this);
  }

  setSelectedPanel(panel) {
    this.setState({selectedTestPanel: panel});
  }

  render() {
    return (
      <div>
        <PanelSwitcher setSelectedPanel={this.setSelectedPanel} selectedTestPanel={this.state.selectedTestPanel} />
        {

           (this.state.selectedTestPanel === 'skill') ?
           <SkillTestCatalogue/>
         :  
           <StartOCEANTest />
        }
      </div>
    )
  }
}

export default {
  component: requireAuth(TestCatalogue)
};