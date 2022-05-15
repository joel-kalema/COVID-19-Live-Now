import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { productId } = useParams();
  console.log(productId);
  
  return (
    <div>
      <h3>Product detail</h3>
    </div>
  );
}

export default ProductDetail;