import React from 'react';
import Contact from './contact';

export default class SingleContact extends React.Component {
  render(){
    return (
      <div className='singlePage'>
        <div className='picContainer'>
          <img className='conPic' src={this.props.imageURL}/>
        </div>
        <div className='spanContainer'>
          <img src='../images/person.jpg'/>
          <span className='name'>{this.props.name}</span>
        </div>
        <div className='spanContainer'>
          <img src='../images/mail.jpg'/>
          <span className='website'>{this.props.email}</span>
        </div>
        <div className='spanContainer'>
          <img src='../images/phone.jpg'/>
          <span className='number'>{this.props.number}</span>
        </div>
        <div className='spanContainer'>
          <img src='../images/world.png'/>
          <span className='location'>{this.props.location}</span>
        </div>
      </div>
    )
  }
}
