import React, {Component} from 'react';
import JobPostingPanel from './components/JobPostingPanel'
import github from './images/github.png';

const jobPostings = [
  {image: github, companyName: 'Github', role: 'Full Stack Developer', location: '5 York St. Toronto', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.'},
  {image: github, companyName: 'Github', role: 'Back-end Developer', location: '5 York St. Toronto', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.'},
  {image: github, companyName: 'Github', role: 'Front-end Developer', location: '5 York St. Toronto', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim dolor, bibendum non eros ut, aliquet tristique eros. Suspendisse potenti. Cras lobortis condimentum magna, ut vehicula turpis dapibus sit amet. Pellentesque hendrerit ultricies massa, a mattis purus rhoncus mollis. Mauris egestas leo id mauris euismod maximus. Proin feugiat tincidunt laoreet.'},
]

class JobPostingsView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row border border-top-0 p-2 bg-white">
        <h5 className="col-md-12">Job Postings</h5>
        {jobPostings.map((p, i) => {
          return <JobPostingPanel key={i} {...p}/>
        })}
      </div>
    )
  }
}

//redux

export default JobPostingsView;