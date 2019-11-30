import React, { Component } from 'react'

class ItemListHome extends Component {
    constructor(props){
        super(props)

    }
    render() {
        var {list} = this.props
        console.log("5 pro",list)
        var listRen = list.map((product,index)=>{
            return <li key={index}>{product.name}</li>
        })
        return (
            <div>
                <h1></h1>
                {listRen}
            </div>
        )
    }
}
export default ItemListHome