import React, { Component } from 'react';
import  Spinner  from "../../layouts/Spinner";


export class TreatDetails extends Component {
   
    
  render() {
      
   const { treat } = this.props;    
   if(treat){
    return (
        <div>
          <h3 className="display-4 mb-2 text-danger">Treat Details</h3>
          <div className="row">
          <table className="table table-borderless m-2">
              <tbody>
                  <tr>
                      <th scope="row">Who is Treating us:</th>
                      <td>{treat.treatFrom}</td>
                  </tr>
                  <tr>
                      <th scope="row">When are we Going:</th>
                      <td>{treat.date}</td>
                  </tr>
                  <tr>
                      <th scope="row">Type:</th>
                      <td>{treat.type}</td>
                  </tr>
                  <tr>
                      <th scope="row">Message:</th>
                      <td>{treat.note}</td>
                  </tr>
                  
              </tbody>
          </table>
        </div>
        </div>
      )
   }else{
       return (
        <Spinner />
       )
   }
    
  }
}


export default TreatDetails;