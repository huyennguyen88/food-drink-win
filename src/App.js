import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import TopNav from './component/TopNav'
import Main from './component/Main'
import Footer from './component/Footer'
import ItemDetail from './component/ItemDetail';
import CartPage from './component/CartPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App container" >
          <TopNav />
            <Route exact path="/" component={Main} />
            <Route exact path="/item" component={ItemDetail} />
            <Route exact path="/cart" component={CartPage}/>
          <Footer />
        </div>
      </Router>

    );
  }
}
export default App;
