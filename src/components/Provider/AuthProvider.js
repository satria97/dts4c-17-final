import { createContext, useEffect, useState } from 'react';
import { listener } from '../../components/Utils/firebase/listener';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    listener((val) => {
      const pathname = window.location.pathname;
      if (val) {
        if (pathname !== '/') {
          window.location.replace('/');
        }
      } else {
        if (pathname === '/') {
          window.location.replace('/login');
        }
      }
    });
  }, []);

  const onSetUser = (token) => {
    // localStorage.setItem("access_token", token);
    setUser(token);
  };

  return (
    <AuthContext.Provider value={{ user, setUser: onSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
