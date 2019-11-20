import React, { Component } from 'react'

export default class Quantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.current
        }
    }
    plus = () => {
        var num = this.state.quantity + 1

        this.setState({
            quantity: num
        })
    }
    minus = () => {
        var num = this.state.quantity - 1
        if (num < 0) num = 0
        this.setState
            ({
                quantity: num
            })
    }
    changeForm = (event) => {
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <div className="quantity input-group mb-3">
                    <button className="btn btn-info" type="button" name="button" onClick={this.plus}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeForm} />
                    <button className="btn btn-info" type="button" name="button" onClick={this.minus}>
                        <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>

                </div>
            </div>
        )
    }
}
