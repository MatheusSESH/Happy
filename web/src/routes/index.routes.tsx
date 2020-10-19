import React, { useContext } from 'react';
import AuthContext from '../context/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routee: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes />: <AuthRoutes />;
}

export default Routee;