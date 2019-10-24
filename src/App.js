import React from 'react';
import './App.css';
import TopNav from './component/TopNav'
import Main from './component/Main'
import Footer from './component/Footer'
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <TopNav/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
export default App;
