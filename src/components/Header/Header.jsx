import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import NewsApi from '../../services/news';

import { Container, Search } from './styles';

const links = [
  { pathname: '/local', label: 'Local Articles' },
  { pathname: '/remote', label: 'Remote Articles' },
];

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  const [search, setSearch] = useState('watch');

  const location = useLocation();
  const { refetch } = useQuery('remote', async () => {
    const response = await NewsApi.getNews(search);
    return response?.data?.articles || [];
  });

  return (
    <Container>
      <section>
        <img className="logo" alt="HODINKEE" src="https://cdn.hodinkee.com/packs/media/images/icon-hodinkee-logo-3c35694f.svg" />
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.pathname} className={location.pathname === link.pathname ? 'selected' : ''}>
                <a href={link.pathname}>{link.label}</a>
              </li>
            ))}
          </ul>
          <FiSearch onClick={() => setSearchOpen(true)} size={20} color="black" />
        </nav>
        <div className="auth-controls">
          <span>Log In</span>
          <span>Sign Up</span>
        </div>
      </section>
      <Search className={searchOpen ? 'open' : ''}>
        <FiSearch size={20} color="black" />
        <div className="input-holder">
          <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={refetch}>
            Search
          </button>
        </div>
        <button onClick={() => setSearchOpen(false)}>
          <FiX size={20} color="black" />
        </button>
      </Search>
    </Container>
  );
}

export default Header;
