import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { firestoreConnect } from 'react-redux-firebase';
import  uuid  from "uuid";

export class SuggestRestaurants extends Component {

  state = {
    suggestedName: '',
    link: '',
    suggestedBy: '',
    suggestedFor: this.props.dashboardProps.match.params.id,
    suggestionId: uuid(),
    likedBy: []
  }



 
  
  
  onSubmit =(e) =>{
    e.preventDefault();

    const newSuggestion = this.state;


    const { firestore, history } = this.props.dashboardProps;
    
    firestore
      .add({ collection: 'suggestions' }, newSuggestion)  
    
    
  }

  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div className="card card-body">
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="place">Name</label>
              <input type="text" className="form-control" name="suggestedName" placeholder="Hit some awesome places" onChange={this.onChange}></input>
            </div>
            <div className="form-group">
              <label htmlFor="place">Link</label>
              <input type="text" className="form-control" name="link" placeholder="https://www.zomato.com/london/yauatcha-soho" onChange={this.onChange}></input>
            </div>
            <input type="submit" value="This Place is awesome" className="btn btn-warning"/>
        </form>
        <a target="_blank" href="https://www.zomato.com" className="m-2">Dint find one?</a>
        </div>
    )
  }
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(SuggestRestaurants);
