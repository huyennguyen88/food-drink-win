import React from 'react';
import './ItemList.css';
import Item from './Item'
class ItemList extends React.Component
 {
    constructor(props){
        super(props);
    }
  render(){
    var listItem = [0,1,2,3,4,5,6,7]
    return (
      <div className="ItemList row my-4">
          {
              listItem.map((i,key)=>(<Item key={key} name="/image/dong2.gif"/>)
                  
              )
          }
      </div>
    );
  }

}
export default ItemList;