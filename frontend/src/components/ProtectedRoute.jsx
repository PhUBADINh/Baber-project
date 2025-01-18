// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // เพิ่มการใช้งาน PropTypes
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth(); 
  console.log("Token in ProtectedRoute:", token);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

 
  return children;
};


ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
