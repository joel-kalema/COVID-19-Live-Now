import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allPreoducts.products);
  const renderList = products.map((product) => {
    const {id, title, price, category, image} = product;
    return (
      <div key={id}>
      <Link to={`/product/${id}`}>
      <img src={image} alt={title}/>
      <h3>Product {id}</h3>
      <h3>{title}</h3>
      <p>$ {price}</p>
      <p>{category}</p>
      </Link>
    </div>
    )
  })
  return (
   <>{renderList}</> 
  );
}

export default ProductComponent;