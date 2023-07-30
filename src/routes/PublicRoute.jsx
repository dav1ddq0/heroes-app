import React, {useContext} from 'react';
import { AuthContext } from '../auth/authContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    return !user.logged ? children : <Navigate to="/marvel" />;
}
