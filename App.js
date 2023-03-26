import logo from './logo.svg';
import './App.css';



import React, { Component } from 'react';

import News from './component/News';
import Navbar from './component/Navbar';
export class App extends Component {
  render() {
    return (
      <>
       <Navbar/>
      <div className='container'>
       
        <News/>
      </div>
      </>
    )
  }
}

export default App
