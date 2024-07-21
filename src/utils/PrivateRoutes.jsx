import { Outlet, Navigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider.jsx';


const PrivateRoutes = () => {
    const { user } = useStateContext()

    return user ? <Outlet/> : <Navigate to="/sign-in"/>
}

export default PrivateRoutes