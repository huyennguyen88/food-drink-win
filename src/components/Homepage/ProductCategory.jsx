import React, { Component } from 'react'
import LeftMenu from './LeftMenu'
import ShowSpace from './ShowSpace'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
class ProductCategory extends Component {
    render() {
        return (
            <div className="container row">
                <LeftMenu/>
                <ShowSpace/>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
      
    }
  }
  const mapDispatchToProps = (dispatch,props)=>{
    return {

    }
  
  }
export default  connect(mapStateToProps,mapDispatchToProps) (ProductCategory )