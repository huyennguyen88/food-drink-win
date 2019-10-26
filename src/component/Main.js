import React from 'react';
import './Main.css';
import BigImage from './BigImage'
import TabList from './TabList'
import Pagination from './Pagination';
class Main extends React.Component {
  render(){
    return (
      <div className="Main container">
          <div className="row">
            {/* <LeftBar/> */}
            <MainM/>
            
          </div>
      </div>
    );
  }
}
class LeftBar extends React.Component{
  render(){
    var style = {
      backgroundColor: "rgb(237, 75, 3)"
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
      <div className="Main ">
        <BigImage/>
        <TabList/>
        <Pagination/>
      </div>
    );
  }
}
export default Main;