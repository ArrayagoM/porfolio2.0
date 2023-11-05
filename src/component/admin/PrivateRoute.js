import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Componente de enrutamiento privado
const PrivateRoute = ({ token, path, element }) => {
  return token ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
