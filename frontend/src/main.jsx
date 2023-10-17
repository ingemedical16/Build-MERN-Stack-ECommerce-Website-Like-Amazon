import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductDetailsScreen.jsx';
import StoreProvider from './Store/StoreProvider.jsx';
import CartScreen from './screens/CartScreen.jsx';
import SigninScreen from './screens/SigninScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';
import SearchScreen from './screens/SearchScreen.jsx';
import ShippingAddressScreen from './screens/ShippingAddressScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:slug" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/signin" element={<SigninScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/shipping"element={<ShippingAddressScreen />} />
              
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
