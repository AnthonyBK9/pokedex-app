import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({isLogged}) => {

    if (isLogged) {
        return (
            <div>           
                <Outlet />
            </div>
        )
    } else {
        <Navigate to="/" />
    }
}

export default ProtectedRoutes