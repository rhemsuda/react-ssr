import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Bar, Radar, HorizontalBar, Doughnut } from 'react-chartjs-2'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label: 'population',
            data:[
              132,
              3432,
              4242,
              4234,
              2423,
              3423
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(105, 99, 132, 0.6)',
              'rgba(230, 99, 132, 0.6)',
              'rgba(0, 99, 132, 0.6)',
              'rgba(50, 99, 132, 0.6)',
              'rgba(190, 99, 132, 0.6)'
            ]
          }
        ]
      },
      radarChartData:{
        labels: ['Openness to Experience', 'Conscientiousness', 'Extroversion', 'Agreeableness', 'Neuroticism'],
        datasets: [
          {
            label: 'Recommended For a New Hire',
            backgroundColor: 'rgb(47,128,237,0.3)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgb(47,128,237)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgb(47,128,237)',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [48, 40, 63, 50, 45] 
          },
          {
            label: 'Your Team Average',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [39, 60, 50, 65, 65]
          }
        ]
      },
      horizontalBarChartData:{
        labels: ['Python', 'Django', 'Statistics', 'Calculus', 'NoSQL'],
        datasets: [
          {
            label: 'Recommended For a New Hire',
            backgroundColor: 'rgb(47,128,237,0.3)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgb(47,128,237)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgb(47,128,237)',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [48, 40, 63, 50, 45] // Chart js adds the two values together. We will need to compute the difference between recommended and the users score, then the bar will equal : difference + user score
          },
          {
            label: 'Your Team Average',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [9, 10, 11, 9, 14] //these numbers are the differences
          }
        ]
      },
      doughnutData: {
        datasets: [{
            data: [10, 20, 30, 40, 50],
            backgroundColor:['#4834d4', '#535c68', '#7ed6df', '#c7ecee', '#130f40']
        }],
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
      }
    } 
  }  
  renderLoggedIn() {
    return this.props.user ? (
      <div>
        <p>{this.props.user.name || this.props.user.accountHolder} is logged in!</p>
        <p>Data: {JSON.stringify(this.props.user, null, 2)}</p>
      </div>   
    ) : (
      <div>
        <p>There is no account logged in.</p>

      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Pathways home</h1>
        {this.renderLoggedIn()}
        <div className="col-md-6">
          <Radar
            data={this.state.radarChartData}
            options={{
              title: {
                display:true,
                text: 'Personality-Based Cultural Analysis',
                fontSize:10
              },
              legend: {
                display:true,
                position:"right"
              },
              pointStyle:'rect'
            }}
          />
        </div>
        <div className="col-md-6">
          <Bar
            data={this.state.barChartData}
            options={{
              maintainAspectRatio: true
            }}
          />
        </div>
        <div className="col-md-8">
          <HorizontalBar 
            data={this.state.horizontalBarChartData}
            options={{
              scales: {
                xAxes: [{
                  stacked:true
                }],
                yAxes:[{
                  stacked:true
                }]
              }
            }}
          />
        </div>
        <div>
          <Doughnut
            data={this.state.doughnutData}
            options={{
              title: {
                display:true,
                text: 'Personality-Based Cultural Analysis',
                fontSize:10
              },
              legend: {
                display:true,
                position:"right"
              }
              
            }}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default {
  component: connect(mapStateToProps)(HomePage)
}; 