import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { RiVirusFill } from 'react-icons/ri';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { BiMicrophone } from 'react-icons/bi';
import App from '../App';
import store from '../redux/store';
import { productReducer } from '../redux/action/productAction';

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
    const tree = render(
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
    expect(tree).toMatchSnapshot();
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
