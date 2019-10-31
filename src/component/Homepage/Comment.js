import React from 'react';
import './Comment.css';
class Comment extends React.Component {
    render() {
        return (
            <div className="d-flex  mt-3">
                    <div className="comment-wrapper">
                        <div className="card border-light">
                            <div>
                                <p className="h5 text-info float-right">10 Comments</p>
                            </div>
                            <div className="card-body">
                                <hr/>
                                <div className="media">
                                    <a href="#" className="float-left">
                                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="rounded-circle mr-3" />
                                    </a>
                                    <div className="media-body">
                                        <span className="text-muted pull-right">
                                            <small className="text-muted">26/11/2019</small>
                                        </span>
                                        <strong className="text-success">@MartinoMont</strong>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,. </p>
                                    </div>
                                </div>
                                <hr/>
                                <textarea className="form-control border-info" placeholder="Write a comment..." rows="3"></textarea>
                                <br/>
                                <button type="button" className="btn btn-info float-right">Post</button>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default Comment;