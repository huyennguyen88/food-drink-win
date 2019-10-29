import React from 'react';
import './ItemList.css';
import Item from './Item'
class ItemList extends React.Component {
  render(){
    var listItem = [0,1,2,3,4,5]
    return (
      <div className="ItemList row">
          {
              listItem.map((i,key)=>(<Item key={key} name="/image/dong2.gif"/>)
                  
              )
          }
      </div>
    );
  }

}
export default ItemList;