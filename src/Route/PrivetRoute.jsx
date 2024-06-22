/* eslint-disable react/prop-types */
import { useContext } from "react";

import { useLocation, Navigate } from 'react-router-dom';

import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

import Lottie from "lottie-react";
import animation from './animation.json'
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    const form = location?.pathname || '/'
    if (loading) {
        return <div className="w-full items-center text-center">
           
            <Lottie animationData={animation} className="h-24 w-24 text-gray-900/50 text-center mx-auto" />
        </div>
    }
    if (!user) {
        return <Navigate to={'/login'} state={form}></Navigate>


    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;