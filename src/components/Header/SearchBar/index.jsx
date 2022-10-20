import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './index.css';

export default function SearchBar() {
  return (
    <form className="search-form" id="search-form">
      <input
        type="search"
        className="search-input"
        id="search-input"
        placeholder="Search all articles"
        title="Enter a title (exact match only)"
      />
      <button
        type="submit"
        id="search-btn"
        className="search-btn"
        title="Search all articles"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
