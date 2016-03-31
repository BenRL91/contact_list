// Javascript Entry Point
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Contact from './contact';
import SingleContactPage from './singleconpage';
import SingleContact from './singlecontact';

function renderHome(){
  ReactDOM.render(
  <Home Activate={renderSingleContactPage}/>,
  document.querySelector('.app')
)}

function renderSingleContactPage(contact){
  ReactDOM.render(
  <SingleContactPage Activate={renderHome} info={contact}/>,
  document.querySelector('.app')
)}

renderHome()
