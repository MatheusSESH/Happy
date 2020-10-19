import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/app/Landing';
import OrphanageMap from '../pages/app/OrphanageMap';
import Orphanage from '../pages/app/Orphanage';
import CreateOrphanage from '../pages/app/CreateOrphanage';
import SuccessfulCreatePage from '../pages/app/CreateSuccessful';
import DashboardHome from '../pages/dashboard/Dashboard';

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" component={DashboardHome} />
            <Route path="/app" component={OrphanageMap} />
            <Route path="/orphanages/create" component={CreateOrphanage} />
            <Route path="/orphanages/create-successful" component={SuccessfulCreatePage} />
            <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;