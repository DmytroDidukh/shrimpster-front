import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {
    SignIn,
    Home
} from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/signin' component={SignIn}/>
        </Switch>
    );
};
export default Routes;
