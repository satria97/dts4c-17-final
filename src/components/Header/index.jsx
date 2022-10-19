import AppBar from './AppBar';
import Banner from './Banner';
import SearchBar from './SearchBar';

import './index.css';

export default function Header() {
  return (
    <header>
      <AppBar />
      <Banner />
      <SearchBar />
    </header>
  );
}
