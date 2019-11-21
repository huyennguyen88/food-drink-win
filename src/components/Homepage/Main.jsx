import React from 'react';
import BigImage from './BigImage'
import TabList from './TabList'
import Pagination from './Pagination';
class Main extends React.Component {
  render() {
    return (
      <div className="Main container">
        <div className="row">
          <MainM />
        </div>
      </div>
    );
  }
}
class MainM extends React.Component {
  render() {
    return (
      <div className="Main ">
            <BigImage />
            <TabList />
            <Pagination />
      </div>
    );
  }
}
export default Main;