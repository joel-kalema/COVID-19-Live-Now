import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './componets.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.allPreoducts.products);
  const [searchCountries, setSearchCountries] = useState('');

  const filterCountry = products.filter((item) => (searchCountries !== '' ? item.country.includes(searchCountries) : item));

  const renderList = filterCountry.slice(0, 100).map((product, id) => {
    const { country, countryInfo } = product;
    return (
      <div key={id} className="card">
        <Link to={`/product/${country}`}>
          <div className="img">
            <img src={countryInfo.flag} alt="" />
          </div>
          <div className="description">
            <h3>{country}</h3>
            <h2>{country}</h2>
            <p>word</p>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <input
        type="text"
        placeholder="Search country..."
        onChange={(e) => setSearchCountries(e.target.value)}
      />
      <div className="cards">
        {renderList}
      </div>
    </>
  );
};

export default ProductComponent;
