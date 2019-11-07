import React from 'react';
class BigImage extends React.Component {
  render(){
    return (
      <div id="carouselExampleIndicators" className="BigImage carousel slide my-4" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img style = {style} className="d-block img-fluid" src="./image/coverimg.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img style = {style} className="d-block img-fluid" src="./image/mi.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img style = {style} className="d-block img-fluid" src="./image/cocktail.jpg" alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
      </div>
    );
  }
}
export default BigImage;
const style = {

    width:"100%",
    height:"400px"
          
}