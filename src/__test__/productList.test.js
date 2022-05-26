import { render } from '@testing-library/react';
import deepFreeze from 'deep-freeze';
import React from 'react';
import { Provider } from 'react-redux';
import { RiVirusFill } from 'react-icons/ri';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { BiMicrophone } from 'react-icons/bi';
import App from '../App';
import store from '../redux/store';
import { selectAddReducer, setProduct, productReducer } from '../redux/action/productAction';

describe('test App component', () => {
  test('check whether the component renders correctly', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('test App component', () => {
  test('check whether the component renders correctly', () => {
    const tr = render(
      <div className="header">
        <h1>
          Fight Covid-19
          {' '}
          <span><RiVirusFill className="user-icon" /></span>
        </h1>
        <div className="setings">
          <BiMicrophone />
          <MdOutlineSettingsSuggest />
        </div>
      </div>,
    );
    expect(tr).toMatchSnapshot();
  });
});

it('Expect Stocks reducer to return the initial state', () => {
  expect(productReducer(undefined, {})).toEqual({
    products: [],
  });
});

it('Expect productReducer', () => {
  expect(productReducer({}, {})).not.toBeNull();
});

describe('Test reducer function and actions', () => {
  const prevState = [];
  const testData = [
    {
      continent: 'Africa',
      peopleVaccinated: 300,
      country: 'Ghana',
    },
    {
      continent: 'North America',
      peopleVaccinated: 500,
      country: 'USA',
    },
    {
      continent: 'Africa',
      peopleVaccinated: 900,
      country: 'Cameroun',
    },
    {
      continent: 'South America',
      peopleVaccinated: 200,
      country: 'Brazil',
    },
  ];

  it('filter using a continent', () => {
    deepFreeze(prevState);
    expect(selectAddReducer(prevState, setProduct('South America', testData)).length).toBe(0);
    expect(selectAddReducer(prevState, setProduct('Oceania', testData)).length).toBe(0);
    expect(selectAddReducer(prevState, setProduct('Europe', testData)).length).toBe(0);
  });
});
