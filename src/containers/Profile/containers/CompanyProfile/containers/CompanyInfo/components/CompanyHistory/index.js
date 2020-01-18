import React, {Component} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import history1 from './images/history1.jpeg';
import history2 from './images/history2.jpg';
import history3 from './images/history3.jpg';
import history4 from './images/history4.png';
import CompanyHistoryLinks from './modals/CompanyHistoryLinks';

const VALUES = [ 'May 2, 2012', 'July 26, 2012', 'November 13, 2012', 'December 20, 2015']
const historyEntries = [
  {
    date: 'May 2, 2012',
    title: 'Title', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.',
    image: history1,
    externalLinks: [
      {
        description: 'This is a link for further information detailing this historic event.',
        link: 'http://google.com'
      },
      {
        description: 'This is a link for further information detailing this historic event.',
        link: 'http://google.com'
      }
    ]
  },
  {
    date: 'July 26, 2012',
    title: 'Title', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.',
    image: history2,
    externalLinks: [
      {
        description: 'This is a link for further information detailing this historic event.',
        link: 'http://google.com'
      }
    ]
  },
  {
    date: 'November 13, 2012',
    title: 'Title', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.',
    image: history3,
    externalLinks: []
  },
  {
    date: 'December 20, 2015',
    title: 'Title', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.',
    image: history4,
    externalLinks: [
      {
        description: 'This is a link for further information detailing this historic event.',
        link: 'http://google.com'
      },
      {
        description: 'This is a link for further information detailing this historic event.',
        link: 'http://google.com'
      },
      {
        description: 'This is a link for further information detailing this historic event.',
        link: 'http://google.com'
      },
      {
        description: 'This is a link for further information detailing this historic event.',
        link: 'http://google.com'
      }
    ]
  }
]

class CompanyHistory extends Component {
  constructor(props) {
    super(props);
     this.state = {
      value: 0,
      previous: 0
    }
  }

  render() {
    const currentHistory = historyEntries[this.state.value];
    return (
      <div className="row border border-top-0 p-2 bg-white">
        <h3>Company Timeline</h3>
        <div style={{ width: '90%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            styles={{ background: '#ffffff', foreground: '#1A79AD', outline: '#dfdfdf' }}
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }} 
            values={ VALUES } />
        </div>
        <div className='text-center'>
          <div className="col-md-12 text-left">
            <img style={{float:'left', width: '250px', height: '200px', marginRight:'20px', marginBottom:'20px'}} className="rounded" src={currentHistory.image} />
            <div>
              <h3>{currentHistory.title}</h3>
              <h5>{currentHistory.date}</h5>
            </div>
            <p>{currentHistory.description}</p>
            {(currentHistory.externalLinks.length > 0) ? (
              <a href="javascript:;" data-toggle="modal" data-target="#externalLinksModal">{`External Links (${currentHistory.externalLinks.length})`}</a>
            ) : null}
          </div>
        </div>  

        <CompanyHistoryLinks links={currentHistory.externalLinks}/>
      </div>
    )
  }
}

export default CompanyHistory;