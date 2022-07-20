import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (

      <nav className="navigation">
        <Link to="/" className="logoStyle">Math Magicians</Link>

        <ul className="nav-header">
          <li className="nav-link">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/Calculator">Calculator</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/Quote">Quote</Link>
          </li>

        </ul>

      </nav>
    );
  }
}

export default Header;
