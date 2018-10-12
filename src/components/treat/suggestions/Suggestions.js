import React, { Component } from 'react';

export class Suggestions extends Component {
  componentWillReceiveProps(){
    const { suggestions} =  this.props;
  }
  render() {
    
    const { suggestions} =  this.props;
        
    if(suggestions != undefined && suggestions.length > 0){
      return (
        <React.Fragment>
          <ul className="list-group">
            {
              suggestions.map(suggestion =>(
                <li className="list-group-item">
                  <a href={suggestion.link} target="_blank">{suggestion.suggestedName}</a>
                  <span style={{float:'right', marginLeft:'20px'}}>10</span>
                  <i className="fa fa-thumbs-up text-right" style={{float: 'right', lineHeight: '24px'}}></i>
                </li>
              ))}
          </ul>
        </React.Fragment>
      )
    }else if(suggestions == undefined){
      return (
        <div >
          <h3 className="m-3 p-3">Be first to <span className="text-danger">Suggest</span> a Place</h3>
       </div>
      )
    }else{
      return (
          <div >
            <h3 className="m-3 p-3">Be first to <span className="text-danger">Suggest</span> a Place</h3>
         </div>
      )
    }
   
  }
}

export default Suggestions;
