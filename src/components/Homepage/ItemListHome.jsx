import React, { Component } from 'react'
import './ItemListHome.css'
import Item from "./Item";
class ItemListHome extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        var { list } = this.props
        var listRen = list.map((item, index) => {
            return <div  key={index} style={style} className="my-4 mx-2">
                <Item id={item.id} name={item.name} image={item.image} rate={item.rate} price={item.price} />
            </div>

        })
        return (
            <div className="ItemListHome bg-light my-4 text-danger">
                <p className="mx-2 my-2">Sản phẩm nổi bật</p>
                <div className="row px-4">
                    {listRen}
                </div>

            </div>
        )
    }
}
export default ItemListHome
const style = {
    maxWidth: "18%"
}