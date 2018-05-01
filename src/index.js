import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD668hPi7-c6rBR8dSI2RHat9xoUCQHbNg",
    authDomain: "bazarapi.firebaseapp.com",
    databaseURL: "https://bazarapi.firebaseio.com",
    projectId: "bazarapi",
    storageBucket: "bazarapi.appspot.com",
    messagingSenderId: "601303550607"
  };

  firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
