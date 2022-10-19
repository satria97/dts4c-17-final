import Logo from '../../../assets/img/logo.svg';

import './index.css';

export default function Banner() {
  return (
    <div className="banner">
      <img src={Logo} alt="logo" className="banner-logo" />
      <div className="banner-title">
        <h1>Clipping.id</h1>
        <h3>your personal reading tracker</h3>
      </div>
    </div>
  );
}
