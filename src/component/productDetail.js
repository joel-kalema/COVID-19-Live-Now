import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/action/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch()
  console.log(product);

  const flechProductDetail = async () => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((error) => {
      console.log("error", error);
    })
    dispatch(selectedProduct(response.data));
  }

  useEffect(() =>{
    if( productId && productId !== ""){
      flechProductDetail();
    }
  }, []);
  
  return (
    <div>
      <h3>Product detail</h3>
    </div>
  );
}

export default ProductDetail;