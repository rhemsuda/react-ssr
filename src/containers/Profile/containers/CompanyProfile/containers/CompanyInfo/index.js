import React, {Component} from 'react';
import CompanyHistory from './components/CompanyHistory';
import ProductsPanel from './components/ProductsPanel';
import CompanyVision from './components/CompanyVision';
import AboutPanel from './components/AboutPanel';
import SuggestedCompanies from './components/SuggestedCompanies';

class CompanyInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CompanyHistory/>
        <CompanyVision/>
        <ProductsPanel/>
        <AboutPanel/>
        <SuggestedCompanies/>
      </div>
    )
  }
}

export default CompanyInfo;