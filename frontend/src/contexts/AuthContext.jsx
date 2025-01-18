import { createContext, useState, useContext,useEffect } from 'react';
import PropTypes from 'prop-types'; 


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  const login = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);
    localStorage.setItem('token', tokenData);
    localStorage.setItem('user', JSON.stringify(userData)); 
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token'); 
    localStorage.removeItem('user'); 

  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout,loading }}>
      {children}
    </AuthContext.Provider>
  );
};


AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};


export const useAuth = () => useContext(AuthContext);
