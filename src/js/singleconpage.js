import React from 'react';
import SingleContact from './singlecontact';


export default class SingleContactPage extends React.Component {
  render(){
    return(
        <div class='singlePage'>
        <button onClick={this.props.Activate}>Go Back</button>
        <SingleContact
        imageURL={this.props.info.imageURL}
        name={this.props.info.name}
        email={this.props.info.email}
        number={this.props.info.number}
        location={this.props.info.location}
        />
        </div>
      )}
};
