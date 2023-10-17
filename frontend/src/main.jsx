import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
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
import ProductScreen from './screens/ProductScreen.jsx';
import StoreProvider from './Store/StoreProvider.jsx';
import CartScreen from './screens/CartScreen.jsx';
import SigninScreen from './screens/SigninScreen.jsx';
import SignupScreen from './screens/SignupScreen.jsx';
import SearchScreen from './screens/SearchScreen.jsx';
import ShippingAddressScreen from './screens/ShippingAddressScreen.jsx';

import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import OrderScreen from './screens/OrderScreen.jsx';
import PaymentMethodScreen from './screens/PaymentMethodScreen.jsx';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen.jsx'
import ResetPasswordScreen from './screens/ResetPasswordScreen.jsx'
import ProfileScreen from'./screens/ProfileScreen.jsx'
import MapScreen from './screens/MapScreen.jsx'
import OrderHistoryScreen from './screens/OrderHistoryScreen.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import DashboardScreen from './screens/DashboardScreen.jsx'
import OrderListScreen from './screens/OrderListScreen.jsx'
import UserListScreen from './screens/UserListScreen.jsx'
import ProductListScreen from './screens/ProductListScreen.jsx'
import ProductEditScreen from './screens/ProductEditScreen.jsx'
import UserEditScreen from './screens/UserEditScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:slug" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/signin" element={<SigninScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route
                path="/forget-password"
                element={<ForgetPasswordScreen />}
              />
              <Route
                path="/reset-password/:token"
                element={<ResetPasswordScreen />}
              />
       <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <MapScreen />
                  </ProtectedRoute>
                }
              />
          
      <Route path="/placeorder" element={<PlaceOrderScreen />} />
      <Route
        path="/order/:id"
        element={
          <ProtectedRoute>
            <OrderScreen />
          </ProtectedRoute>
        }
      ></Route>

<Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
      <Route path="/shipping" element={<ShippingAddressScreen />} />
      <Route path="/payment" element={<PaymentMethodScreen />} />
      {/* Admin Routes */}
      <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
        </PayPalScriptProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
