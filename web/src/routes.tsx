import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanageMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import SuccessfulCreatePage from './pages/CreateSuccessful';
import Login from './pages/dashboard/login';
import ForgetPassword from './pages/dashboard/login-no-password';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgetPassword} />
                <Route path="/app" component={OrphanageMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/create-successful" component={SuccessfulCreatePage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;