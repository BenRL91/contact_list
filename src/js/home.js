import React from 'react';
import Contact from './contact';

const CONTACTINFO = [
  { imageURL: 'http://fillMurray.com/1100/1100',
    name: 'JD Isaacks',
    email: 'jd@theironyard.com',
    number: '555-123-4566',
    location: 'Atlanta, GA'
  },
  { imageURL: 'http://fillMurray.com/1200/1200',
    name: 'Brit Butler',
    email: 'brit@theironyard.com',
    number: '555-123-4567',
    location: 'Atlanta, GA'
  },
  { imageURL: 'http://fillMurray.com/1300/1300',
    name: 'Jo Albright',
    email: 'jo@theironyard.com',
    number: '555-123-4568',
    location: 'Atlanta, GA'
  },
  { imageURL: 'http://fillMurray.com/1000/1000',
    name: 'Tim Whitacre',
    email: 'tim@theironyard.com',
    number: '555-123-4569',
    location: 'Atlanta, GA'
  }
]
export default class Home extends React.Component {
  render(){
    return (
      <div className='contacts'>
        <div className='title'>My Peeps</div>
        {CONTACTINFO.map(contact =>
          <Contact
          activate={this.props.Activate}
          info={contact}
          imageURL={contact.imageURL}
          name={contact.name}
          />)}
      </div>
    )
  }
}
