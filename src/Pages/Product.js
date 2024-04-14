import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductContent from '../components/ProductContect/ProductContent.js';
import ProductDisplay from '../components/ProdctDisplay/ProductDisplay.js';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.js';
import RelatedProject from '../components/RelatedProject/RelatedProject.js';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <ProductContent product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProject />
    </div>
  );
}

export default Product;
