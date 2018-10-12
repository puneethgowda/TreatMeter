import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

export class Header extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  onLogoutClick = e => {
    e.preventDefault();

    const { firebase } = this.props;
    firebase.logout();
  };
  render() {
    const { isAuthenticated } = this.state;
    const { auth } = this.props;
    console.log(this.props);
    
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Treat Meter
        </Link> 
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
         {isAuthenticated ? (
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">
                  Create Treat
                  </Link>
                </li>
                </ul>
             ): null
         }
          {isAuthenticated ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#!" className="nav-link text-white">
                    {auth.email}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#!"
                    className="nav-link"
                    onClick={this.onLogoutClick}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            ) : null}
        </div>
      </div>
    </nav>
    )
  }
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Header);
