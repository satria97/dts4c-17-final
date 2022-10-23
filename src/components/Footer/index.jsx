import './index.css';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className="footer">
      <small>Clipping &#169;{date}</small>
    </footer>
  );
}
