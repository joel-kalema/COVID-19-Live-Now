import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/action/productAction"
import ProductComponent from "./productContent";
import './componets.css';

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const flechProduct = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((error) => {
      console.log("error", error);
    });
    dispatch(setProduct(response.data));
  }
  console.log(products);
  useEffect(() =>{
    flechProduct();
  }, []);

  console.log("products :", products);

  return (
    <div className ='cards'>
      <ProductComponent />
    </div>
  );
}

export default ProductList;