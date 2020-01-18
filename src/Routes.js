import App from './containers/index';
import HomePage from './containers/Home';
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';
import Profile from './containers/Profile';
import PageNotFound from './components/PageNotFound';
import JobSearch from './containers/JobSearch'
import TestCatalogue from './containers/TestCatalogue';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...LoginPage,
        path: '/login'
      },
      {
        ...RegisterPage,
        path: '/register'
      },
      {
        ...Profile,
        path: '/profile/:id'
      },
      {
        ...Profile,
        path: '/profile'
      },
      {
        ...JobSearch,
        path: '/jobsearch'
      },
      {
        ...TestCatalogue,
        path: '/taketest'
      },
      {
        ...PageNotFound // MUST BE LAST
      }
    ]
  }  
]