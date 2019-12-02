import React, { Component } from 'react'

class ItemListHome extends Component {
    constructor(props){
        super(props)

    }
    render() {
        var {list} = this.props
        var listRen = list.map((product,index)=>{
            return <li key={index}>{product.name}</li>
        })
        return (
            <div>
                <h1>Sản phẩm nổi bật</h1>
                {listRen}
            </div>
        )
    }
}
export default ItemListHome