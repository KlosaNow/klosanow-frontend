import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RootState } from '../redux/store';


const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.user)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }
  return <Outlet />
}

export default ProtectedRoute