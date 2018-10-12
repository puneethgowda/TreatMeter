import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { TreatDetails } from "./TreatDetails";
import { SuggestRestaurants } from "./SuggestRestaurants";
import { Suggestions } from "./Suggestions";

export class Dashboard extends Component {
  render() {
   const { treat, suggestionsList } = this.props; 
    return (
      <div className="row">
        <div className="col-md-7">
         <div className="row">
           <TreatDetails treat={treat} />
         </div>
         <h1 className="mb-3">Suggest A <span className="text-primary">Place</span></h1>
          <div className="row">
           <SuggestRestaurants  dashboardProps={this.props} />
        
          </div>
        </div>
        <div className="col-md-5">
          <h1>Suggestions</h1>
            <Suggestions suggestions={ suggestionsList } />
        </div>
       </div>
    )
  }
}

export default compose(
  firestoreConnect(props => [
      { collection: 'treats', storeAs: 'treat', doc: props.match.params.id },
      { collection: 'suggestions', storeAs: 'suggestionsList', where: [['suggestedFor', '==', props.match.params.id]]}
  ]),
  connect(({ firestore: { ordered } }, props) => ({
      treat: ordered.treat && ordered.treat[0],
      suggestionsList: ordered.suggestionsList
  }))
  )(Dashboard);
