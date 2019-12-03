import React from 'react';
import './ItemDetail.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
import ReviewForm from './ReviewForm';
import DetailInfo from './DetailInfo'
class ItemDetail extends React.Component {
    constructor(props) {
        super(props)
        var id = this.props.match.params.id
        this.props.productShow(id);
        this.props.loadReviews(id);
        this.props.loadReviewUsers(id);
    }
    // componentDidMount(){
    //     var id = this.props.match.params.id
    //     this.props.productShow(id);
    //     this.props.loadReviews(id);
    //     this.props.loadReviewUsers(id);
    // }
    render() {
        var { product, reviews, users } = this.props;
        return (
            <div className="ItemDetail">
                <div className="card card-detail">
                    <div className="container">
                        <div className="wrapper row">
                            <Preview image={product.image} />
                            <DetailInfo product_id={product.id} />
                        </div>
                    </div>
                </div>

                <div >
                    <div className="my-4">
                        <div className="bg-light" >
                            <div className="px-4 py-4">
                                <p className="h5 text-info">{reviews.length} Bình luận</p>
                                {
                                    reviews.map((item, index) => {
                                        var cmtUser = users.find((u) => {
                                            return u.id === item.user_id
                                        })
                                        return <Comment key={index} review={item} user={cmtUser} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>
                <ReviewForm id={this.props.match.params.id} />
            </div>
        );
    }
}
class Preview extends React.Component {
    render() {
        return (
            <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1">
                        <img alt="abc" src={this.props.image} />
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.products,
        reviews: state.reviews,
        users: state.users,
        user: state.user,
        review: state.review,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        productShow: (id) => {
            dispatch(actions.productShowRequest(id))
        },
        loadReviews: (id) => {
            dispatch(actions.fetchReviews(id))
        },
        loadReviewUsers: (id) => {
            dispatch(actions.fetchReviewUsers(id))
        },
        add: (id, item) => {
            dispatch(actions.addToCart(id, item))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);