import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './SignUp';

 
// rendering app.js which comprices of welcome.js & SignUpForm.js
ReactDOM.render(
  <React.StrictMode>
    <SignUp />  
  </React.StrictMode>,
  document.getElementById('root')
);

