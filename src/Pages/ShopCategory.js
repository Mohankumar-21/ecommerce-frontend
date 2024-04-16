import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import drop_down_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/items/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(all_product);

  useEffect(() => {

    if (all_product.length > 0) {
      setFilteredProducts(all_product);
    }
  }, [all_product]);

  const handleSearch = (query) => {
    if (typeof query !== 'string') {
      return; 
    }
    const filtered = all_product.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Function to reset search and show all products
  const handleReset = () => {
    setSearchQuery('');
    setFilteredProducts(all_product);
  };

  // Update search results as user types
  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query); 
  };

  return (
    <div className='shop-category'>
      <img className='shopcategoryBanner' src={props.banner} alt='banner' />
      <div className='shopCategory-indexsort'>
        <p>
          <span>Showing 1-{all_product.filter(item => item.category === props.category).length}</span> out of {all_product.length} products
        </p>
        <div className='shopCategory-sort'>
          Sort by <img src={drop_down_icon} alt='' />
        </div>
      </div>
     


   <div className='search-bar-container'>
      <div className="search-container">
        <input
          type='text'
          value={searchQuery}
          onChange={handleChange}
          placeholder='Search products...'
        />
        <button onClick={handleSearch}>Search</button>
        <button className='Reset-btn'  onClick={handleReset}>Reset</button>
      </div>
    </div>
      <div className='shopCategory-products'>
        {filteredProducts.map((item, i) =>
          props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        )}
      </div>
      <div className='shop-category-loadmore'>Explore More</div>
    </div>
  );
};

export default ShopCategory;
