import React from 'react';
import CartItem from './CartItem';


class ItemCartList extends React.Component {
  constructor(props){
      super(props)
  }
  render() {
    var listItem = [0,1,2,3];
    return (
      <>
       {
           listItem.map(()=>(<tr><CartItem/></tr>))
       }
      </>
    );
  }
}
export default ItemCartList;