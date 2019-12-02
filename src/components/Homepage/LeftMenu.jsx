import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { Link } from "react-router-dom";
class LeftMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
        
        }
   
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.categories === prevState.categories) {
            return null
        } else {
            return { categories: nextProps.categories }
        }
    }
    onChooseCate = (category_id)=>{
        
        var {allProduct} = this.props
        this.props.onChooseCate(category_id,allProduct)
        
    }
    render() {
        var { categories } = this.state
        
        var foodArr = categories.filter((item) => {
            return item.id <= 7
        })
        var drinkArr = categories.filter((item) => {
            return item.id > 7
        })
        var foodRend = foodArr.map((item, index) => <div key={index}  onClick={()=>this.onChooseCate(item.id)}>
            <div className="dropdown-divider"></div>
            <Link  to="/" key={index} className="nav-link h5 text-warning" role="tab" aria-controls="v-pills-home" aria-selected="false">
                {item.name}
                <i className="fas fa-angle-right float-lg-right"></i>
            </Link>
        </div>)
        var drinkRend = drinkArr.map((item, index) => {
            return <div key={index}  onClick={()=>this.onChooseCate(item.id)}>
                <div className="dropdown-divider"></div>
                <Link to="/" key={index} className="nav-link h5 text-warning" role="tab" aria-controls="v-pills-home" aria-selected="false">{item.name} <i className="fas fa-angle-right float-lg-right"></i></Link>
            </div>
        })
        console.log("pro",this.props.allProduct)
        console.log("pro w cate",this.props.productsWithCategory)
        return (
            <div className="col-3 border bg-secondary ">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <p className="h4 text-danger pt-2">FOOD
                    <i className="fas fa-hamburger ml-2"></i>
                    </p>
                    {foodRend}
                    <p className="h4 text-danger pt-2">DRINK
                    <i className="fas fa-mug-hot ml-2"></i>
                    </p>
                    {drinkRend}
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories,
        allProduct: state.allProduct,
        productsWithCategory: state.productsWithCategory
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChooseCate: (category_id,allProduct)=>{
            dispatch(actions.getProductsWithCategory(category_id,allProduct))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)