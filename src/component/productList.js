/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/action/productAction';
import ProductComponent from './productContent';
import './componets.css';

const ProductList = () => {
  useSelector((state) => state);
  const dispatch = useDispatch();

  const flechProduct = async () => {
    const response = await axios
      .all([
        axios.get('https://corona.lmao.ninja/v2/all'),
        axios.get('https://corona.lmao.ninja/v2/countries'),
      ])
      .catch((error) => {
        alert('error', error);
      });
    dispatch(setProduct(response[0].data));
    dispatch(setProduct(response[1].data));
  };
  useEffect(() => {
    flechProduct();
  }, []);

  return (
    <div>
      <div>
        <div className="cercle2" />
        <div className="cercle1" />
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductList;
