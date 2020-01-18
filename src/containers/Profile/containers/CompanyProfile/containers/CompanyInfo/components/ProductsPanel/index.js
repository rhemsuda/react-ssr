import React from 'react';
import gitRepositories from './images/gitRepositories.png';
import gitBashCLI from './images/gitBashCLI.png';
import git from './images/git.png';
import gitlab from './images/gitlab.png';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import ProductPanel from './components/ProductPanel';
import ProductDetailsModal from '../../modals/ProductDetailsModal';

const products = [
  {name: 'Git Bash CLI', image: gitBashCLI, releaseDate: 'May 20, 2014', currentVersion: '9.1.2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros.'},
  {name: 'Github Repositories', image: gitRepositories, releaseDate: 'May 20, 2014', currentVersion: '9.1.2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros.'},
  {name: 'Git', image: git, releaseDate: 'May 20, 2014', currentVersion: '9.1.2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros.'},
  {name: 'Gitlab', image: gitlab, releaseDate: 'May 20, 2014', currentVersion: '9.1.2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros.'},
]

class ProductsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProductPanel: null
    }
  }

  selectProductPanel = (index) => {
    this.setState({
      selectedProductPanel: index
    })
  }

  render() {
    const selectedProductDetails = products[this.state.selectedProductPanel];

    return (
      <div className="row border border-top-0 p-2 bg-white">
        <h3>Products and Services</h3>
        <div className="col-xl-12 col-lg-12 my-3 scrollMenu">
            {products.map((p, index)=> {
              return <div key={index} className="productPanel mx-3">
                <ProductPanel {...p} onButtonClick={() => this.selectProductPanel(index)}/>
              </div>
            })}
        </div>
        <ProductDetailsModal {...selectedProductDetails}/>
      </div>
    ) 
  }
}

export default withStyles(s)(ProductsPanel);