import React from 'react';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const RequireAuh = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuh;