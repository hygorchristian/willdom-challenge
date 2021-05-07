import React from 'react';

import Container from './styles';

function Footer() {
  return (
    <Container data-testid="footer">
      <section>
        <div className="groups">
          <div className="group" data-testid="about">
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
          <div className="group" data-testid="contact">
            <h2>Contact</h2>
            <ul>
              <li>Advertisement</li>
              <li>Ask us anything</li>
            </ul>
          </div>
          <div className="group" data-testid="our-sites">
            <h2>our sites</h2>
            <ul>
              <li>hodinkee.com</li>
              <li>hodinkee.jp</li>
              <li>hodinkee shop</li>
              <li>hodinke community</li>
            </ul>
          </div>
          <div className="group" data-testid="social">
            <h2>Social</h2>
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
