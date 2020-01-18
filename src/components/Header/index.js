import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './styles.css';
import logo from './images/logo.png';

const Header = (props) => {
  let userLoggedIn = (props.user) ? 1 : 0;

  let headerNavOptions = [
    { link: '/register', content: 'Register', authState: 0 },
    { link: '/login', content: 'Login', authState: 0 },
    { link: '/jobsearch', content: 'Find Job', authState: 1 },
    { link: '/taketest', content: 'Take Test', authState: 1 },
    { link: '/profile', content: 'Profile', authState: 1 },
    { link: '/', content: 'Logout', authState: 1, onClick: props.logout }
  ]
  
  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <Link to="/" className="navbar-left"><img id="logo" src={logo}/></Link>
      <div className="justify-content-end">
        <ul className="nav">
          {
            headerNavOptions.map((o, i) => {
              return (userLoggedIn ^ o.authState === 0) ? (
                <li key={i} className="nav-item">
                  <Link to={o.link} className="nav-link text-white" onClick={o.onClick}>{o.content}</Link>
                </li>
              ) : null
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default withStyles(s)(Header);