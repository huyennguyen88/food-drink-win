import React from 'react';
import './App.css';
import Homepage from './component/Homepage/Homepage'
class App extends React.Component {
  render(){
    return (
      <div className="App container">
        <Homepage></Homepage>
      </div>
    );
  }
}
export default App;
