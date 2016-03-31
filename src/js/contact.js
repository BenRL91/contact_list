import React from 'react';

export default class Contact extends React.Component {
  clickhandler(){
    this.props.activate(this.props.info)
  }
  render(){
    return(
      <div className='contact' onClick={::this.clickhandler}>
        <img className='murray' src={this.props.imageURL}/>
        <span>{this.props.name}</span>
      </div>
    )
  }
};
//Name //website //phone //number //location//
