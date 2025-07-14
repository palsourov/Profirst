import React from 'react';
import { AuthContext } from './Context/AuthContext';
import { use } from 'react';

const PrivateRoute = ({children}) => {
    const { user } = use(AuthContext);
    return (
        <div>
            {user ? children : <Navigate to="/SignIn" />}
        </div>
    );
};

export default PrivateRoute;