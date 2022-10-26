import { useState, useEffect } from 'react';

import './index.css';

export default function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className="footer">
      <small>&#169;{date}</small>
    </footer>
  );
}
