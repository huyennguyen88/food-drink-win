import React from 'react';
import mi from './../../image/mi.jpg'
class BigImage extends React.Component {
  render(){
    return (
      <div id="carouselExampleIndicators" className="BigImage carousel slide my-4 mx-2" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img style = {style} className="d-block img-fluid" src="https://dcassetcdn.com/design_img/2772377/454551/454551_15161780_2772377_c84e32e7_image.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img style = {style} className="d-block img-fluid" src={mi} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img style = {style} className="d-block img-fluid" src="https://www.seacrestbeachhotel.com/~/media/parks/sea-crest/dine/reds/cocktail-menu/cocktail-menu-page-banner-desktop.jpg?mw=1500&hash=EDD6B7B601A989545EC25BC0E2C28051C41A4F1E"alt="Third slide"/>
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

    width:"1200px",
    height:"500px"
          
}