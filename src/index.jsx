import React from 'react';
import ReactDOM from 'react-dom/client';

import RouteSwitch from './RouteSwitch';
import { AuthProvider } from './components/Provider/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouteSwitch />
    </AuthProvider>
  </React.StrictMode>,
);
