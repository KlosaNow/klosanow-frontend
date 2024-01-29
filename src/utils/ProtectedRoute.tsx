import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '../redux/store';


const ProtectedRoute = () => {
  const user = useSelector((state: RootState) => state.user?.data)

  return (
    user ? <Outlet /> : <Navigate to="/sign-in" />
  )

}

export default ProtectedRoute