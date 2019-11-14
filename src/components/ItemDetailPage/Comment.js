import React from 'react';
import './Comment.css';
class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var { review, user } = this.props
        return (
            <div>
               

                <div className="media">

                    <a href="abc" className="float-left">
                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="rounded-circle mr-3" />
                    </a>
                    <div className="media-body">
                        <p className="text-muted pull-right">
                            <small className="text-muted">26/11/2019</small>
                        </p>
                        <strong className="text-success">@{user ? user.name : ""}</strong>

                        <p>
                            {review.comment} </p>

                        <div className="action">
                            <button type="button" className="btn btn-info btn-sm" title="Edit">
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button type="button" className="btn btn-success btn-sm mx-1" title="Approved">
                                <i className="far fa-thumbs-up"></i>
                            </button>
                            <button type="button" className="btn btn-danger btn-sm" title="Delete">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="border border-info" />
            </div>
        );
    }
}

export default Comment;
