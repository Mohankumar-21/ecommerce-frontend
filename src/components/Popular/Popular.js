import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../items/Item';

const Popular = () => {

  const [data_product, setData_product] = useState([]);

  useEffect(()=>
  {
      fetch('https://ecommerce-backend12.onrender.com/popular')
      .then((res)=>res.json())
      .then((data)=>
      {
        setData_product(data);
      })
  },[])

  return (
    <div className='popular'>
       <h1>Popular In Women</h1>
       <hr/>
       <div className='popular-item'>
             {data_product.map((item,i)=>
            {
                return <Item key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
       </div>
    </div>
  )
}

export default Popular;
