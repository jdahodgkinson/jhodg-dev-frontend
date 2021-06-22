import React from 'react';
import './App.css';
import './sidebar.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <Greeting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <h1 className="brand"><a href="#">jhodg.dev</a></h1>
      <a href="#">Development</a>
      <a href="#">Football</a>
      <a href="#">Video Games</a>
    </nav>
  );
}

function Article() {
  return (
    <div>
      <Sidebar/>
      <div className="content">
        <p>Article coming here in just a second...</p>
      </div>
    </div>
  );
}

function Greeting() {
  return (
    <div className='greeting'>
      <h1>coming soon</h1>
    </div>
  );
}
