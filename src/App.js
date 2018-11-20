import React from 'react';
import './App.css';
import Playground from './components/Playground';

const authParams = {
  isAuthenticated: true,
  isAuthorized: true,
}

const App = (props) => (
  <div className="App">
    <Playground {...props} {...authParams} />
  </div>
)

export default App;
