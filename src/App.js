import React from 'react';


import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     products: []
  //   }
  // }
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
// const mapStateToProps = (state)=>{
//   return{
//     products: state
//   }
// }
// const mapDispatchToProps = (dispatch, props)=>{
//   return{
//     fetchAPI: () => {
//       dispatch(actions.fetchProductsRequest());
//     }
//   }
// }
export default App;
