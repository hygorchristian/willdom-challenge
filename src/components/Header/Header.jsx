import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <section>
        <img className="logo" alt="HODINKEE" src="https://cdn.hodinkee.com/packs/media/images/icon-hodinkee-logo-3c35694f.svg" />
        <nav>
          <ul>
            <li className="selected"><a>Latest</a></li>
            <li><a>Videos</a></li>
            <li><a>Sections</a></li>
            <li><a>Brands</a></li>
            <li><a>Podcasts</a></li>
            <li><a>Magazine</a></li>
            <li><a>Insurance</a></li>
            <li><a>Shop</a></li>
          </ul>
          <FiSearch size={20} color="black" />
        </nav>
        <div className="auth-controls">
          <span>Log In</span>
          <span>Sign Up</span>
        </div>
      </section>
    </Container>
  );
}

export default Header;
