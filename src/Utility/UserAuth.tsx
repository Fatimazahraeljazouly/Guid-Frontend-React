import  { createContext, useContext, useEffect, useState } from 'react';
import {toast,Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userData, setUserData] = useState({
    id: '',
    email: '',
    fullname: '',
    role: '',
  });
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }
  }, [token]);

  const logIn = (user, authToken) => {
    setUserData(user);
    setToken(authToken);
    setIsLoggedIn(true)
    toast.success(`Connected successfully ${user.fullname} `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
     navigate('/my-profile')
  };

  const logOut = () => {
    setUserData({ id: '', email: '', fullname: '', role: '' });
    setToken('');
    setIsLoggedIn(false)
    toast.info(`Disconnected successfully `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      navigate('/')

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, token, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
