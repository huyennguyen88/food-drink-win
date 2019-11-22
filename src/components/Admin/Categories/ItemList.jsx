import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../../actions/index'
import Item from './Item';
class ItemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
    }
    componentWillMount(){
        this.props.fetchCategories();
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            categories: nextProps.categories
        })
    }
    render() {
        let sort = this.props.sortCategoryType
        let {categories} = this.state;
        let {searchKeyCategory} = this.props
        categories = categories.filter((c,i)=>{
            return c.name.toLowerCase().indexOf(searchKeyCategory.toLowerCase()) !== -1;
        })
        if(sort.by === 'name'){
            categories.sort((a,b)=>{
                a.name = a.name.toLowerCase();
                b.name = b.name.toLowerCase();
                if(a.name > b.name) return sort.value;
                else if(a.name < b.name) return -sort.value;
                else return 0;
            })
        }
        else if(sort.by === 'classify'){
            categories.sort((a,b)=>{
                if(a.classify > b.classify) return sort.value;
                else if(a.classify < b.classify) return -sort.value;
                else return 0;
            })
        }
        let listCategories = categories.map((c,i)=>{
            return(
                <Item category={c} key={i}/>
            )
        })

        return (
            <div className="my-products">
                <table  className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Classify</th>
                    <th className="text-center">Option</th>
                </tr>
                </thead>
                <tbody>
                    {listCategories}
                </tbody>
            </table>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        categories: state.categories,
        searchKeyCategory: state.search,
        sortCategoryType: state.sort
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        fetchCategories: ()=>{
            dispatch(actions.fetchCategoriesRequest())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemList);