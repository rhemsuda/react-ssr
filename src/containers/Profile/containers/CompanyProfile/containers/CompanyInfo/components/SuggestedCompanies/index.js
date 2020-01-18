import React from 'react';

import facebook from './images/facebook.png';
import microsoft from './images/microsoft.png';
import sunlife from './images/sunlife.png';
import google from './images/google.png';
import bitbucket from './images/bitbucket.png';
import indexexchange from './images/indexexchange.png';
import snapchat from './images/snapchat.png';

const companies = [
  {name: 'Facebook', image: facebook},
  {name: 'Microsoft', image: microsoft},
  {name: 'Sun Life', image: sunlife},
  {name: 'Google', image: google},
  {name: 'Bitbucket', image: bitbucket},
  {name: 'Index Exchange', image: indexexchange},
  {name: 'Snapchat', image: snapchat},
]

const SuggestedCompanies = (props) => {
  return (
    <div className="row border border-top-0 p-2 bg-white">
      <h3>Suggested Companies</h3>
      <div className="col-xl-12 col-lg-12 my-3 scrollMenu">
          {companies.map((c, id)=> {
            return <div key={id} className="productPanel mx-3 text-center">
              <img src={c.image} style={{maxWidth: '65px', marginBottom: '10px'}}/>
              <h6>{c.name}</h6>
            </div>
          })}
      </div>
    </div>
  )
}

export default SuggestedCompanies;