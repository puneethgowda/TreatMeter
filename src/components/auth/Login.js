import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

export class Login extends Component {
    state = {
        email: '',
        password: ''
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const { firebase } = this.props;
        const { email, password } = this.state;
    
        firebase
          .login({
            email,
            password
          })
          .catch(err => alert('Invalid Login Credentials', 'error'));
      };
    
      onChange = e => this.setState({ [e.target.name]: e.target.value });
    
  render() {
      console.log(this.props);
      
    return (
        <div className="row">
           <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body">
                <h1 className="text-center pb-4 pt-3">
                    <span className="text-danger">
                    <i className="fas fa-lock" /> Login
                    </span>
                </h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    </div>
                    <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-block"
                    />
                </form>
                <Link to="/register" className="text-warning">Create new Account</Link>
                </div>
            </div>
           </div>
      </div>
    )
  }
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
      
    }))
  )(Login);
