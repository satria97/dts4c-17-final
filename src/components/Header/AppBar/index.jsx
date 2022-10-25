import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { signingOut } from '../../Utils/firebase/signout';

import './index.css';

export default function AppBar() {
  const navigate = useNavigate();
  const [clock, setClock] = useState('');
  const userName = 'Hi, randomUser77';

  const dropdown = document.getElementById('dropdown');

  const signOut = async () => {
    const loggedOut = await signingOut();
    if (!loggedOut.message) {
      navigate('/signup');
    }
  };

  function toggleDropdown() {
    dropdown.classList.toggle('hide');
  }

  function closeDropdown() {
    dropdown.classList.add('hide');
  }

  function openDropdown() {
    dropdown.classList.remove('hide');
  }

  function implementClock() {
    const date = new Date();
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    const time = `${hours}:${minutes}`;

    return time;
  }

  useEffect(() => {
    setInterval(() => {
      setClock(implementClock());
    });
  });

  return (
    <div className="appbar">
      <div className="appbar-profile-info">
        <div>{userName}</div>
        <div>{clock}</div>
        <div className="appbar-setting-btns">
          <button
            type="button"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <ul
        className="appbar-dropdown hide"
        id="dropdown"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <li className="dropdown-menu-item">
          <button onClick={signOut}>Sign Out</button>
        </li>
      </ul>
    </div>
  );
}
