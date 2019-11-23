import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../actions/index'
import { get } from 'http';

class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            classify: 1,
        }
    }
    oncloseForm = () => {
        this.props.closeForm();
        this.props.categoryClear();
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name
        let value = target.value
        if (name === 'classify') {
            if (value === "1") value = true
            else value = false
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit = async (e) => {
        e.preventDefault();
        if (this.props.getCategory) {
            let category = this.state
            let editCategory = category;
            this.props.categoryEdit(editCategory);
            this.props.closeForm();
            this.props.categoryClear()

        }
        else {
            this.props.categoryCreate(this.state);
            this.props.closeForm();
            this.props.categoryClear()

        }
    }
    componentWillMount() {
        if (this.props.getCategory) {
            let { getCategory } = this.props
            this.setState({
                id: getCategory.id,
                name: getCategory.name,
                classify: getCategory.classify
            })
        }
    }
    render() {
        let { getCategory } = this.props
        let category = this.state
        return (
            <div className="card border-primary add-form">
                <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: "center" }}>
                        {getCategory ? "Update Category" : "New Category"}
                        <span>
                            <i onClick={this.oncloseForm} className="fas fa-times-circle" style={{ float: "right" }}></i>
                        </span>
                    </h4>
                    <form>
                        <span className="label">Name</span>
                        <input
                            defaultValue={category.name}
                            onKeyUp={this.onChange}
                            type="text"
                            name="name"
                            className="form-control"
                        />
                        <span className="label">Classify</span>
                        <select
                            defaultValue={category.classify ? "1" : "0"}
                            onChange={this.onChange}
                            name="classify"
                            className="form-control"
                        >
                            <option value="1">Food</option>
                            <option value="0">Drink</option>
                        </select>
                        <div style={style.styleControlBtn}>
                            <button
                                onClick={this.onSubmit}
                                type="submit"
                                className="btn btn-success"
                                style={style.styleBtn}
                            >Save
                            </button>
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
    styleControlBtn: {
        margin: "3% 0"
    }
}
const mapStateToProps = (state) => {
    return {
        newUser: state,
        getCategory: state.getCategory
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        closeForm: () => {
            return dispatch(actions.closeForm());
        },
        categoryCreate: (category) => {
            return dispatch(actions.categoryCreateRequest(category))
        },
        categoryClear: () => {
            return dispatch(actions.categoryClear());
        },
        categoryEdit: (category) => {
            return dispatch(actions.categoryEditRequest(category))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);