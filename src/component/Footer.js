import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer py-5 mt-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Food and Drink 2019</p>
        </div>
      </div>
    );
  }
}
export default Footer;