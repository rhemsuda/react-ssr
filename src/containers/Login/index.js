import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../services/user';
import { clearError } from '../../services/error/actions';
import cookie from 'react-cookies';
import LoginForm from './components/LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      formError: ''
    }
    this.handleLogin = this.handleLogin.bind(this);

    const rememberEmail = cookie.load('rememberEmail');
    const rememberMe = (rememberEmail !== {} && rememberEmail !== undefined);
    this.loginFormProps = {
      handleLogin: this.handleLogin,
      error: this.formError,
      rememberEmail: rememberMe ? rememberEmail : undefined,
      rememberMe
    }
  }

  componentDidUpdate() {
    if(this.props.error !== null) {
      this.setState({formError: this.props.error})
      this.props.clearError();
    }
  }

  redirectLoggedIn () {
    if(this.props.user) {
      return <Redirect to="/"/>
    }
  }

  handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const rememberMe = event.target.rememberMe.checked;
    this.props.login({email, password, rememberMe});
  }

  render() {
    return(
      <div>
        <LoginForm {...this.loginFormProps}/>
        {this.redirectLoggedIn()}
      </div> 
    )  
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error
})

const mapDispatchToProps = {
  login, clearError
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(LoginPage)
};