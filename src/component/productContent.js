/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './componets.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.allPreoducts.products);
  const [searchCountries, setSearchCountries] = useState('All');
  const allCountries = [...new Set(products.map((item) => item.country))];
  const filterCountry = products.filter((item) => (searchCountries !== 'All' ? item.country.includes(searchCountries) : item));
  const renderList = filterCountry.map((product, id) => {
    const {
      country, countryInfo, continent, todayCases,
    } = product;
    return (
      <div key={id} className="card">
        <Link to={`/product/${country}`}>
          <div className="img">
            <img src={countryInfo.flag} alt="" />
          </div>
          <div className="description">
            <h2>{country}</h2>
            <p>{continent}</p>
            <p>
              todayCases:
              {' '}
              {todayCases}
            </p>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <h1 className="title">COVID-19 Live Now</h1>
      <div className="descriptions">
        <p>
          The coronavirus COVID-19 is affecting 228 countries and territories.
          The day is reset after midnight GMT+0. The list of countries and their
          regional classification is based on the United Nations Geoscheme. Sources
          are provided
          under Latest News. Learn more about Worldometer is COVID-19 data
        </p>
      </div>
      <select onChange={(e) => setSearchCountries(e.target.value)}>
        <option value="All">All</option>
        {allCountries.map((country) => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <div className="cards">
        {renderList}
      </div>
    </>
  );
};

export default ProductComponent;
