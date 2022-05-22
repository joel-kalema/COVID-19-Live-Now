import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/action/productAction';
import ProductComponent from './productContent';
import './componets.css';

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const flechProduct = async () => {
    const response = await axios
      .all([
        axios.get('https://corona.lmao.ninja/v2/all'),
        axios.get('https://corona.lmao.ninja/v2/countries'),
      ])
      .catch((error) => {
        console.log('error', error);
      });
    dispatch(setProduct(response[0].data));
    dispatch(setProduct(response[1].data));
    console.log(response[0].data);
    console.log(response[1].data);
  };
  console.log(products);
  useEffect(() => {
    flechProduct();
  }, []);

  return (
    <div>
      <div>
        <di className="cercle2" />
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductList;
