/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { store } from '../Store/StoreProvider';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { state } = useContext(store);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
};

export default AdminRoute;
