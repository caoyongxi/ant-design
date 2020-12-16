import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import Button from './components/button/index'
import './components/button/style/index'


ReactDOM.render(
  <div>
  <Button type="primary">Primary</Button>
  <Button>Default</Button>
  <Button type="ghost">Ghost</Button>
  <Button type="dashed">Dashed</Button>
</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
