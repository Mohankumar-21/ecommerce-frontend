import React, { useEffect, useState } from 'react';
import './RelatedProject.css';
import Item from '../items/Item';

const RelatedProject = () => {
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
    <div className='relatedproject'>
       <h1>Related Products</h1>
       <hr/>
       <div className='relatedproduct-items'>
           {data_product.map((item,i)=>
        {
            return <Item  key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
       </div>
    </div>
  )
}

export default RelatedProject;
