import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import Item from './Item'
class ShowSpace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productsWithCategory: [],
            allProduct: []
        }
    }
    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (nextProps.productsWithCategory === prevState.productsWithCategory &&
            nextProps.allProduct === prevState.allProduct) {
            return null
        }
        else {
            return {
                allProduct: nextProps.allProduct,
                productsWithCategory: nextProps.productsWithCategory,
            }
        }
    }

    render() {
        var { productsWithCategory, allProduct } = this.state
        var list
        if (productsWithCategory.length === 0) 
        {
            list = allProduct.map((item, index) => {
                return <div key={index} className="col-3 mb-3">
                    <Item  id={item.id} name={item.name} image={item.image} rate={item.rate} price={item.price} />
                </div>

            })
        }
        else {
            list = productsWithCategory.map((item, index) => {
                return <div key={index} className="col-3 mb-3">
                <Item  id={item.id} name={item.name} image={item.image} rate={item.rate} price={item.price} />
            </div>
            })
        }

        return (
            <div className="col-9 ">
                <div className="row">
                    {list}
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        productsWithCategory: state.productsWithCategory,
        allProduct: state.allProduct
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChooseCate: (category_id, allProduct) => {
            dispatch(actions.getProductsWithCategory(category_id, allProduct))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ShowSpace)
const style = {
    maxWidth: "19%"
}