import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { isAuthenticated } from './services/auth';

import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanageMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import SuccessfulCreatePage from './pages/CreateSuccessful';
import Login from './pages/login-user/login';
import SignUpUser from './pages/login-user/sign-up';
import ForgetPassword from './pages/login-user/login-no-password';
import DashboardHome from './pages/dashboard/Dashboard';


// const PrivateRoute = ({ component: Component, ...rest  }) => (
//     <Route {...rest} render={ props => 
//         isAuthenticated() ? (
//             <Component {...props} />
//         ) : (
//             <Redirect to={{ pathname: '/', state: { from: props.location }}} />
//         )
//     }
//     />
// );


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUpUser} />
                <Route path="/dashboard" component={DashboardHome} />
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