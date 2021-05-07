import React, { useState, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import NewsApi from '../../services/news';

import { Container, Search } from './styles';

const links = [
  { pathname: '/local', label: 'Local Articles' },
  { pathname: '/remote', label: 'Remote Articles' },
];

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  const [search, setSearch] = useState('');

  const location = useLocation();
  const { mutate } = useMutation(NewsApi.getNews);

  const handleSearch = () => {
    mutate({ q: search });
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

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
        <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setSearchOpen(false)}>
          <FiX size={20} color="black" />
        </button>
      </Search>
    </Container>
  );
}

export default Header;
