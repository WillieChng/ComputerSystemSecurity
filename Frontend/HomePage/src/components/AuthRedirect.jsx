import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthRedirect = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const excludedPaths = ['/create-account', '/forgot-password'];
    if (!isLoggedIn && !excludedPaths.includes(location.pathname)) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate, location.pathname]);

  return null;
};

export default AuthRedirect;