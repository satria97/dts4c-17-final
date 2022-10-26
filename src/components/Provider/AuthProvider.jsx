import { createContext, useEffect, useState } from 'react';
import { listener } from '../Utils/firebase/listener';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   listener((val) => {
  //     const pathname = window.location.pathname;
  //     if (val) {
  //       if (pathname !== '/') {
  //         window.location.replace('/');
  //       }
  //     } else {
  //       if (pathname === '/') {
  //         window.location.replace('/home');
  //       }
  //     }
  //   });
  // }, []);

  useEffect(() => {
    listener((val) => {
      const pathname = window.location.pathname;
      if ((val && pathname === '/login') || (val && pathname === '/signup')) {
        window.location.replace('/');
      } else {
        if (!val && pathname === '/') {
          window.location.replace('/home');
        }
      }
    });
  }, []);

  const onSetUser = (token) => {
    setUser(token);
  };

  return (
    <AuthContext.Provider value={{ user, setUser: onSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};
