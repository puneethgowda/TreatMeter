import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export class Treat extends Component {
    state = {
        showTreatDetails: false
    }

  render() {
      const { showTreatDetails } = this.state;
      const { id, treatFrom, date, type } = this.props.treat;
    return (
        <div className="card card-body m-3">
            <h4 onClick={() => this.setState({showTreatDetails : !showTreatDetails})}>
            { treatFrom}
            {
                showTreatDetails ? <i className="fa fa-sort-down text-primary"></i> : <i className="fa fa-arrow-circle-right text-primary"></i>
            }
            <Link to={`/suggest/${id}`} style={{fontSize: "15px", cursor: 'pointer', float: 'right'}} className="text-danger"><i className="fa fa-eye"></i></Link>
             </h4>
            { showTreatDetails ? (
            <ul className="list-group">
                <li className="list-group-item">Date: {date}</li>
                <li className="list-group-item">Type: {type}</li>
            </ul>
            ): null}
      </div>
    )
  }
}

Treat.propTypes = {
    treat: PropTypes.object.isrequired,
    
}

export default Treat;
