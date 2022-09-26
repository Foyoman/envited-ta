import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Landing from './components/Landing';
import Create from './components/Create';
import Event from './components/Event';
import './style.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const routes = (
  <Router>
    <Routes>
      <Route element={ <App /> }>
        <Route path="/" element={ <Landing /> } />
        <Route path="/create" element={ <Create /> } />
        <Route path="/event" element={ <Event /> } />
      </Route>
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  routes
);