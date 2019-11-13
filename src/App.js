import React from 'react';
import './App.css';
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
      </Router>
    );
  }
}
export default App;
