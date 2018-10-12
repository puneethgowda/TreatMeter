import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class CreateTreat extends Component {
  state = {
    treatFrom:'',
    date:'',
    type:'',
    note:''
  }

  onSubmit = (e) =>{
    e.preventDefault();

    const newTreat = this.state;
    const { firestore, history } = this.props;
    firestore
      .add({ collection: 'treats' }, newTreat)
      .then(() => history.push('/'));
  }

  onChange = (e) =>{
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    console.log(this.props);
    
    return (
      <React.Fragment>
          <h1 className="display-4"><span className="text-danger">Create Treat</span></h1>
          <div className="card card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="treatFrom">Name:</label>
                <input type="text" className="form-control" name="treatFrom" placeholder="Enter your name..." onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="text" className="form-control" name="date" placeholder="When are you planning..." onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="type">Type:</label>
                <input type="text" className="form-control" name="type" placeholder="Lunch,Dinner,Booze..." onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="type">Note:</label>
                <textarea type="text" className="form-control" name="note" placeholder="Some message to the group..." onChange={this.onChange}/>
              </div>
              <input type="submit" className="btn btn-danger" value="Let's create treat" />
            </form>
          </div>
      </React.Fragment>
    )
  }
}

export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    
  }))
)(CreateTreat);
