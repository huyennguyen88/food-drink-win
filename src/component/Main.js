import React from 'react';
import './Main.css';
import BigImage from './BigImage'
import ItemList from './ItemList'
class Main extends React.Component {
  render(){
    return (
      <div className="Main container">
          <div className="row">
            <LeftBar/>
            <MainM/>
          </div>
      </div>
    );
  }
}
class LeftBar extends React.Component{
  render(){
    var style = {
      backgroundColor: "rgb(147, 42, 3)"
    }
    return (
      <div className="LeftBar col-lg-3">
        <p className="h1 my-4">Category</p>
        <div className="list-group " >
          <a href="#" style={style} className="list-group-item h4 text-light">Category 1</a>
          <a href="#" style={style} className="list-group-item h4 text-light">Category 2</a>
          <a href="#" style={style} className="list-group-item h4 text-light">Category 3</a>
        </div>
      </div>
    );
  }
}
class MainM extends React.Component{
  render(){
    return (
      <div className="Main col-lg-9">
        <BigImage/>
        <ItemList/>
      </div>
    );
  }
}
export default Main;