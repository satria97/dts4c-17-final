import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

import { displayToast } from '../ToastNotif';

import './index.css';

export default function DarkModeBtn() {
  const DARK_MODE_STATUS = 'DARK_MODE_STATUS';
  const [darkMode, setDarkMode] = useState(false);

  const darkModeStatus = localStorage.getItem(DARK_MODE_STATUS);
  const html = document.documentElement;

  useEffect(() => {
    if (darkModeStatus === 'true') {
      html.classList.add('dark');
      setDarkMode(true);
    } else {
      html.classList.remove('dark');
      setDarkMode(false);
    }
  }, [darkModeStatus, html.classList]);

  function toggleDarkMode() {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setDarkMode(false);

      displayToast('Dark mode off 🌞');

      localStorage.setItem(DARK_MODE_STATUS, false);
    } else {
      html.classList.add('dark');
      setDarkMode(true);

      displayToast('Dark mode on 🌙');

      localStorage.setItem(DARK_MODE_STATUS, true);
    }
  }

  return (
    <button
      type="button"
      className="dark-mode-btn"
      id="dark-mode"
      title="Toggle dark mode"
      onClick={toggleDarkMode}
    >
      <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
    </button>
  );
}
