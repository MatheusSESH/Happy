import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthProvider } from '../context/auth';
import  Routee from './index.routes';


function Routes() {
      return(
          <BrowserRouter>
              <Switch>
                <AuthProvider>
                  <Routee />
                </AuthProvider>
              </Switch>
          </BrowserRouter>
      );
  }
  
  export default Routes;