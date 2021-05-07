import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../customRender';
import Footer from '../../src/components/Footer';

describe('Testing footer', () => {
  it('renders section about correctly', async () => {
    render(<Footer />);

    await waitFor(() => screen.getByTestId('footer'));
    expect(screen.getByTestId('about')).toHaveTextContent('company');
    expect(screen.getByTestId('about')).toHaveTextContent('masthead');
    expect(screen.getByTestId('about')).toHaveTextContent('careers');
    expect(screen.getByTestId('about')).toHaveTextContent('privacy');
    expect(screen.getByTestId('about')).toHaveTextContent('terms of use');
    expect(screen.getByTestId('about')).toHaveTextContent('faq');
  });

  it('renders section contact correctly', async () => {
    render(<Footer />);

    await waitFor(() => screen.getByTestId('footer'));
    expect(screen.getByTestId('contact')).toHaveTextContent('Advertisement');
    expect(screen.getByTestId('contact')).toHaveTextContent('Ask us anything');
  });

  it('renders section our sites correctly', async () => {
    render(<Footer />);

    await waitFor(() => screen.getByTestId('footer'));
    expect(screen.getByTestId('our-sites')).toHaveTextContent('hodinkee.com');
    expect(screen.getByTestId('our-sites')).toHaveTextContent('hodinkee.jp');
    expect(screen.getByTestId('our-sites')).toHaveTextContent('hodinkee shop');
    expect(screen.getByTestId('our-sites')).toHaveTextContent('hodinke community');
  });

  it('renders section social correctly', async () => {
    render(<Footer />);

    await waitFor(() => screen.getByTestId('footer'));
    expect(screen.getByTestId('social')).toHaveTextContent('facebook');
    expect(screen.getByTestId('social')).toHaveTextContent('twitter');
    expect(screen.getByTestId('social')).toHaveTextContent('vimeo');
    expect(screen.getByTestId('social')).toHaveTextContent('instagram');
  });
});
