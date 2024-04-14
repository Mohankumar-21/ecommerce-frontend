import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import {ShopContext} from '../Context/ShopContext';
import drop_down_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/items/Item';

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategoryBanner' src={props.banner} alt='banner' />
      <div className='shopCategory-indexsort'>
         <p>
           <span>Showing 1-12</span> out of 36 products
         </p>
         <div className='shopCategory-sort'>
             Sort by <img src={drop_down_icon} alt='' />
         </div>
      </div>

      <div className='shopCategory-products'>
        {all_product.map((item,i)=>
        {
            if(props.category===item.category)
            {
              return <Item key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
              return null
            }
        })}
      </div>
      <div className='shop-category-loadmore' >
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory;
