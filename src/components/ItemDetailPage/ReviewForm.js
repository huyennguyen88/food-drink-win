import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index"
import Rating from "react-rating";
class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }
    UNSAFE_componentWillMount() {
        if (this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            })
        }

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskEditing) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            })
        }
        else if (!nextProps.taskEditing) {
            this.setState({
                id: '',
                name: '',
                status: true
            })
        }
    }
    onClose = () => {
        this.props.closeFunc();
    }
    changeForm = (event) => {
        var name = event.target.name
        var value = event.target.value
        if (name === "status") value = value === 'true'
        this.setState({
            [name]: value
        })
    }
    OnCancel = () => {
        this.setState({
            name: '',
            status: true
        })
    }
    SubmitForm = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state)
        this.onClose();

    }
    render() {
        var { id, name, status } = this.state
        return (
            <>
                <div className="card card-danger">
                    <div className="card-header bg-info">
                        <div className=" row d-flex justify-content-between">
                            <p className="h5">{id !== '' ? "Update" : "Add"}
                            </p>
                            <i onClick={this.onClose} className="fas fa-times-circle"></i>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.SubmitForm}>
                            <div className="form-group">
                                <label>Bình luận</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Đánh giá</label>
                                <p>
                                    <Rating
                                        emptySymbol="fa fa-star-o"
                                        fullSymbol="fa fa-star text-warning "
                                    />
                                </p>
                                
                            </div>

                            <button  type="submit" className="btn btn-success mx-3"><i className="fas fa-plus"></i>Lưu lại</button>
                            <button onClick={this.OnCancel} type="reset" className="btn btn-danger"><i className="fas fa-times"></i>Hủy bỏ</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        //   onAddTask :(task)=>{
        //     dispatch(actions.addTask(task));
        //   }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);