import React from 'react';
import { Link } from "react-router-dom";
import ViewTreats from '../treat/ViewTreats';

export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
         <Link to="/create" ><h1 style={{marginTop:'3em'}} className="display-3">Throw a <span className="mt-3 text-danger ">TREAT { ' '}...!</span></h1></Link>
          {/* <h3 className="ml-3" style={{float:'right'}}>To your Friends</h3> */}
        </div>
        <div className="col-md-4">
            <ViewTreats />
        </div>
      </div>
    </div>
  )
}
