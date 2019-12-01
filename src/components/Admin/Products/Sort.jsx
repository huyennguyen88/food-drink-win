import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/index'
class Sort extends React.Component{
    onClick = (by,value)=>{
        let sort = {
            by: by,
            value: value
        }
        this.props.sortProduct(sort);
    }
    render(){
        var sortProductType = this.props.sortProductType;
        
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort
                    <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={()=> this.onClick('name',1)}>
                            <a 
                                role="button" className={sortProductType.by === "name" && sortProductType.value === 1 ? "sort_selected" : ""}
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">Name A-Z</span>
                            </a>
                        </li>
                        <li onClick={()=> this.onClick('name',-1)}>
                            <a 
                                role="button" 
                                className={sortProductType.by === "name" && sortProductType.value === -1 ? "sort_selected" : ""}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">Name Z-A</span>
                            </a>
                        </li>
                        <li role="separator" className="divider">
                        </li>
                        <li onClick={()=> this.onClick('price',1)}>
                            <a 
                                role="button" 
                                className={sortProductType.by === "price" && sortProductType.value === 1 ? "sort_selected" : ""}
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">Price low-high</span>
                            </a>
                        </li>
                        <li onClick={()=> this.onClick('price',-1)}>
                            <a role="button" className={sortProductType.by === "price" && sortProductType. value === -1 ? "sort_selected" : ""}>
                                <span className="fa fa-sort-alpha-desc pr-5">Price high-low </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        sortProductType: state.sort
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        sortProduct: (sort)=>{
            dispatch(actions.Sort(sort))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sort);