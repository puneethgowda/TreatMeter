import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Treat } from './Treat';

class ViewTreats extends Component {

  render() {
    const { treats } = this.props;
    console.log(this.props);
    
    if(treats){
      return (
        <div >
          <h3 className="m-3">Treats For <span className="text-primary">You</span></h3>
          {treats.map(treat => (
           <Treat key={treat.id} treat={treat} />
          ))}
          
        </div>
      )
    }else{
      return (
        <div className="border">
        <h3 className="m-3 p-3 border">Treats For <span className="text-primary">You</span></h3>
        <h6 className="m-3 p-3">Oooh..! No Treats for You Yet</h6>
      </div>
      );
    }
  }
}

ViewTreats.propTypes = {
  firestore: PropTypes.object.isRequired,
  treats: PropTypes.array
};

export default compose(
  firestoreConnect([{collection: 'treats'}]),
  connect((state, props) => ({
    treats: state.firestore.ordered.treats
  }))
)(ViewTreats);