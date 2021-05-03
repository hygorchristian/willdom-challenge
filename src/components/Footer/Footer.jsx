import React from 'react';

import Container from './styles';

function Footer() {
  return (
    <Container>
      <section>
        <div className="groups">
          <div className="group">
            <h2>About</h2>
            <ul>
              <li>company</li>
              <li>masthead</li>
              <li>careers</li>
              <li>privacy</li>
              <li>terms of use</li>
              <li>faq</li>
            </ul>
          </div>
          <div className="group">
            <h2>Contact</h2>
            <ul>
              <li>Advertisement</li>
              <li>ask us anything</li>
            </ul>
          </div>
          <div className="group">
            <h2>our sites</h2>
            <ul>
              <li>hodinkee.com</li>
              <li>hodinkee.jp</li>
              <li>hodinkee shop</li>
              <li>hodinke community</li>
            </ul>
          </div>
          <div className="group">
            <h2>About</h2>
            <ul>
              <li>facebook</li>
              <li>twitter</li>
              <li>vimeo</li>
              <li>instagram</li>
            </ul>
          </div>
        </div>
        <img src="https://cdn.hodinkee.com/packs/media/images/icon-hodinkee-logo-light-149a9399.svg" alt="logo" />
        <div className="rights">
          Copyright 2009-2021, Hodinkee inc. All rights reserved.
          <br />
          Developed by Hygor dias ♥
        </div>
      </section>
    </Container>
  );
}

export default Footer;
