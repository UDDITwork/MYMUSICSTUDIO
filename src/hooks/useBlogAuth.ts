
import { useState, useEffect } from 'react';

export const useBlogAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('blogAuth');
    const isAuth = authStatus === 'true';
    console.log('useBlogAuth - checking localStorage:', authStatus, 'isAuth:', isAuth);
    setIsAuthenticated(isAuth);
  }, []);

  const logout = () => {
    console.log('Logging out - removing blogAuth from localStorage');
    localStorage.removeItem('blogAuth');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, setIsAuthenticated, logout };
};
