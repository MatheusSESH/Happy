import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/app/Landing';
import OrphanageMap from '../pages/app/OrphanageMap';
import SignIn from '../pages/auth/login';
import SignUpUser from '../pages/auth/SignUp';
import Orphanage from '../pages/app/Orphanage';
import ForgetPassword from '../pages/auth/RememberPassword';

const AuthRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/forgot-password" component={ForgetPassword} />
            <Route path="/sign-up" component={SignUpUser} />
            <Route path="/app" component={OrphanageMap} />
            <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>
    </BrowserRouter>
);

export default AuthRoutes;