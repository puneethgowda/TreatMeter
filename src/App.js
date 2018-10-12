import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';
import { Provider } from 'react-redux';
import Header from "./components/layouts/Header";
import Dashboard from './components/layouts/Dashboard';
import TreatDashboard from "./components/treat/suggestions/Dashboard";
import CreateTreat from './components/treat/CreateTreat';
import  Login  from './components/auth/Login';
import  Register  from './components/auth/Register';
import './App.css';


class App extends Component {
  render() {    
    return (
      <Provider store={store}>
          <Router>
            <div className="App">
            <Header />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
                  <Route exact path="/create" component={UserIsAuthenticated(CreateTreat)} />
                  <Route exact path="/suggest/:id" component={UserIsAuthenticated(TreatDashboard)} />
                  <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
                  <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
                </Switch>
              </div>
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
