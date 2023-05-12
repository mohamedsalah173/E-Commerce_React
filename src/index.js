import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer, { getTotal } from "./features/cartSlice"
import productsReducer, { productsFetch } from './features/productsSlice';
import { productApi } from './features/productsAPI';
import { userLoginReducer } from './components/client/userReducer'

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    userLogin: userLoginReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

store.dispatch(productsFetch());
store.dispatch(getTotal());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>


  </BrowserRouter>

);

