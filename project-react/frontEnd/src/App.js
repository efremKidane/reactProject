
import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './mainPage';

  class App extends React.Component{
    render(){
      return(
        <div>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </div >
      );
    }
  }

export default App;
