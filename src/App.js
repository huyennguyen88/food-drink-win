import React from 'react';
import './App.css';
import Manager from './components/Admin/Manager'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Homepage />
        </div>
        <Manager/>
      </Router>
    );
  }
}
export default App;
