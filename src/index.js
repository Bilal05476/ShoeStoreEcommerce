import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./components/StateProvider";

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
