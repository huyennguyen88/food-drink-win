import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {connect} from 'react-redux'
import Homepage from './components/Homepage/Homepage'
import * as actions from './actions/index'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
  componentWillMount(){
    let token = JSON.parse(localStorage.getItem('token'));
    this.props.watchProfile(token);
  }
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
const mapDispatchToProps = (dispatch)=>{
  return{
      watchProfile: (token) => {
          dispatch(actions.profileRequest(token));
      },
  }
}
export default connect(null,mapDispatchToProps)(App)
