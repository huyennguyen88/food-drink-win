import React from 'react';
import {connect} from 'react-redux'
import * as actions from './../../actions/index'

class AddForm extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name: '',
            image: 'dong2.gif',
            price: '',
            classify: true,
            category_id: null,
            description: '',
            quantity: 0,
        }
    }
    oncloseForm = ()=>{
        this.props.closeForm();
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name
        let value = target.value
        if(name === 'classify'){
            if(value === "1")  value = true
            else value = false
        }
        if(name === 'category'){
            value = parseInt(value)
        }
        this.setState({
            [name] : value
        })    
        // console.log(this.state);

    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.createProduct(this.state);
        this.props.closeForm();
    }
    componentWillMount(){
        this.props.fetchCategories()
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            category_id: nextProps.categories[0].id
        })
    }
    render() {
        let {categories} = this.props
        let categoriesSelect = categories.map((c,index)=>{
            return(
                <option key={index} value={c.id}>{c.name}</option>
            )
        })
        return (
            <div className="card border-primary add-form">
                <div className="card-body">
                    <h4 className="card-title" style={{textAlign: "center"}}>
                        New Product
                        <span>
                            <i onClick={this.oncloseForm} className="fas fa-times-circle" style={{float: "right"}}></i>
                        </span>
                    </h4>
                    <form>
                        <span className="label">Name</span>
                        <input onKeyUp={this.onChange}type="text" name="name" className="form-control"/>
                        {/* <span className="label">Image</span>
                        <input onKeyUp={this.onChange} type="file" name="image" className="form-control"/> */}
                        <span className="label">Price</span>
                        <input onKeyUp={this.onChange} type="number" name="price" className="form-control"/>
                        <span className="label">Classify</span>
                        <select onChange={this.onChange} name="classify" className="form-control">
                            <option value="1">Food</option>
                            <option value="0">Drink</option>
                        </select>
                        <span className="label">Category</span>
                        <select onChange={this.onChange} name="category_id" className="form-control">
                            {categoriesSelect}
                        </select>
                        <span className="label">Description</span>
                        <textarea onKeyUp={this.onChange} type="text" name="description" className="form-control"/>
                        <span className="label">Quantity</span>
                        <input onKeyUp={this.onChange} type="number" name="quantity" className="form-control"/>
                        <div style={style.styleControlBtn}>
                            <button onClick={this.onSubmit} type="submit" className="btn btn-success" style={style.styleBtn}>Save</button>
                            <button type="reset" className="btn btn-danger" style={style.styleBtn}>Cancel</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}
const style = {
    styleBtn: {
        width: "20%",
        marginRight: "10px"
    },
    styleControlBtn:{
        margin: "3% 0"
    }
}
const mapStateToProps = (state)=>{
    return{
        displayForm: state.displayForm,
        categories: state.categories
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        closeForm: ()=>{  
            dispatch(actions.closeForm());
        },
        fetchCategories: ()=>{
            dispatch(actions.categoriesRequest())
        },
        createProduct: (product)=>{
            dispatch(actions.productCreateRequest(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddForm);