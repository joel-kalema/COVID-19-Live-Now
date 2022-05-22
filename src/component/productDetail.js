import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/action/productAction';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { country, countryInfo } = product;
  const { productId } = useParams();
  console.log(useParams());
  const dispatch = useDispatch();
  console.log(productId);
  console.log(product);

  const flechProductDetail = async () => {
    const respons = await axios
      .get(`https://corona.lmao.ninja/v2/countries/${productId}`)
      .catch((error) => {
        console.log('error', error);
      });
    dispatch(selectedProduct(respons.data));
    console.log(respons);
  };

  useEffect(() => {
    if (productId && productId !== '') {
      flechProductDetail();
    }
    dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <di className="detail-content">
      <div className="details">
        <div>
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={66} />
          </div>
        </div>
        {/* <img src={countryInfo.flag} alt=''/> */}
        <div className="content">
          <h2>{country}</h2>
          <h2 className="price">re</h2>
        </div>
      </div>
    </di>
  );
};

export default ProductDetail;
