// src/UserContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context
const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => {
  return useContext(UserContext);
};

// UserContext provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user data from local storage or check session
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Handle login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Context value
  const value = {
    user,
    loading,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
