import React from 'react';

export default class contact extends React.Component {
  constructor(contactName, src){
    super();
    this.imgURL = src;
    this.contactName = contactName;
  }
  render(){
    <div className='contact'>
    <img className='conPic' src={this.imgURL}/>
      <div className='name'>{this.contactName}</div>
    </div>
  }
}
