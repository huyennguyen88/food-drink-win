import React from 'react';
import './ItemDetail.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
class ItemDetail extends React.Component {
    componentDidMount() {
        var id = this.props.match.params.id
        this.props.productShow(id);
    }
    render() {
        let product = this.props.product;
        return (
            <div>
                <div className="ItemDetail">
                    <div className="card card-detail border-light">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <Preview img={product.image} />
                                <DetailInfo product={product} />
                            </div>
                        </div>
                    </div>
                </div>
                <Comment />
            </div>

        );
    }
}
class Preview extends React.Component {
    render() {
        return (
            <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1"><img alt="abc" src={"./../../image/" + this.props.img} /></div>
                </div>
            </div>
        );
    }
}
class DetailInfo extends React.Component {
    render() {
        let { product } = this.props
        console.log(product)
        return (
            <div className="details col-md-6">
                <p className="h2">{product.name}</p>
                <div className="rating">
                    <div className="stars">
                        {

                        }
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">{product.description}</p>
                <h4 className="price">current price: <span>${product.price}</span></h4>
                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                <div className="action">
                    <button className="btn btn-success mx-1" type="button">Add to cart</button>
                    <button className="btn btn-danger" type="button"><span className="fa fa-heart"></span></button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        productShow: (id) => {
            dispatch(actions.productShowRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);