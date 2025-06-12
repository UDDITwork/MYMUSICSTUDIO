
import { useState, useEffect } from 'react';

export const useBlogAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('blogAuth');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const logout = () => {
    localStorage.removeItem('blogAuth');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, setIsAuthenticated, logout };
};
