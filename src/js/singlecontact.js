import React from 'react';
import Contact from './contact';

export default class SingleContact extends React.Component {
  render(){
    return (
      <div className='single'>
        <img className='conPic' src={this.props.imageURL}/>
        <span className='name'>{this.props.name}</span>
        <span className='website'>{this.props.email}</span>
        <span className='number'>{this.props.number}</span>
        <span className='location'>{this.props.location}</span>
      </div>
    )
  }
}
