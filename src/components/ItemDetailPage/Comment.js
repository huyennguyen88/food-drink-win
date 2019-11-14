import React from 'react';
import './Comment.css';
class Comment extends React.Component {
    render() {
        return (
            <div className="d-flex  mt-3">
                    <div className="comment-wrapper">
                        <div className="card border-light">
                            <div className="card-body">
                                <hr/>
                                <div className="media">
                                    <a href="abc" className="float-left">
                                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="rounded-circle mr-3" />
                                    </a>
                                    <div className="media-body">
                                        <span className="text-muted pull-right">
                                            <small className="text-muted">26/11/2019</small>
                                        </span>
                                        <strong className="text-success">@MartinoMont</strong>
                                        <p>
                                            {this.props.comment} </p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Comment;