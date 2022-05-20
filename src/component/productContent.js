import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './componets.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.allPreoducts.products);
  const renderList = products.map((product) => {
    const {id, title, price, category, image} = product;
    return (
      <div key={id} className ='card'>
      <Link to={`/product/${id}`}>
      <img src={image} alt={title}/>
      <div className="description">
      <h3>{title}</h3>
      <h2>$ {price}</h2>
      <p>{category}</p>
      </div>
      </Link>
    </div>
    )
  })
  return (
   <>{renderList}</> 
  );
}

export default ProductComponent;