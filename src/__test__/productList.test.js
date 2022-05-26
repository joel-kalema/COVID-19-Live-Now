import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';
import { productReducer } from '../redux/action/productAction';

describe('test PlayersList component', () => {
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

it('Expect productReducer', () => {
  expect(productReducer({}, {})).not.toBeNull();
});
